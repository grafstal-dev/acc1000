import { hasAny, inScopeEU, visibleQuestions } from './questionnaire';

export function currentStatus(a) {
    if (!inScopeEU(a)) return { label: 'Out of Scope', color: 'info' };
    const pp = a.prohibited_practices || [];
    if (pp.some(x => !['None of the above', "I don't know"].includes(x))) return { label: 'Prohibited', color: 'danger' };
    if ((a.annex3_domains && hasAny(a.annex3_domains)) || (a.annex1_sectoral && hasAny(a.annex1_sectoral)) || a.biometric_public_rt === 'Yes') return { label: 'High Risk', color: 'danger' };
    if (a.gpai_provider === 'Yes' || ['deepfake_disclosure', 'ai_interaction_disclosure', 'emotion_or_biocat'].some(k => a[k] === 'Yes')) return { label: 'Medium Risk', color: 'warn' };
    const core = ['market_scope', 'annex3_domains', 'annex1_sectoral', 'biometric_public_rt', 'gpai_provider', 'deepfake_disclosure', 'ai_interaction_disclosure', 'emotion_or_biocat'];
    if (core.some(id => (a[id] === undefined || a[id] === '' || (Array.isArray(a[id]) && a[id].length === 0)))) return { label: 'Unknown', color: 'muted' };
    return { label: 'Low Risk', color: 'success' };
}

export function finalize(a) {
    if (!inScopeEU(a)) return { type: 'OUT', category: null, reason: 'OUT', gaps: [], determinants: [] };
    const visible = visibleQuestions(a);
    const requiredIds = visible.filter(q => q.required).map(q => q.id);
    const condReq = [];
    if (a.gpai_provider === 'Yes') condReq.push('gpai_systemic', 'model_card');
    if (a.deepfake_disclosure === 'Yes') condReq.push('confirm_transparency_marking');
    if (a.ai_interaction_disclosure === 'Yes') condReq.push('confirm_transparency_interaction');
    if (a.emotion_or_biocat === 'Yes') condReq.push('confirm_transparency_emobio');
    const unknowns = Array.from(new Set([...requiredIds, ...condReq])).filter(id => (a[id] === undefined || a[id] === '' || (Array.isArray(a[id]) && a[id].length === 0) || a[id] === "I don't know"));
    const pp = a.prohibited_practices || [];
    const prohibited = pp.some(x => !['None of the above', "I don't know"].includes(x));
    if (prohibited) return { type: 'MISSING_PREP', category: null, reason: 'PROHIBITED', gaps: ['Prohibited practice in scope'], determinants: [`Prohibited: ${pp.filter(x => !['None of the above', "I don't know"].includes(x)).join(', ')}`] };
    if (unknowns.length) return { type: 'MISSING_PREP', category: null, reason: 'UNCLEAR', gaps: unknowns, determinants: ['Unknown items present'] };
    const high = (hasAny(a.annex3_domains) || hasAny(a.annex1_sectoral) || a.biometric_public_rt === 'Yes');
    const determinants = [];
    if (high) {
        if (hasAny(a.annex3_domains)) determinants.push('Annex III selected');
        if (hasAny(a.annex1_sectoral)) determinants.push('Annex I (sectoral)');
        if (a.biometric_public_rt === 'Yes') determinants.push('Real-time biometric ID (public spaces)');
        const mustYes = ['human_oversight', 'risk_management', 'data_governance', 'testing_robustness', 'logging_traceability', 'tech_documentation', 'post_market_monitoring', 'qms_present'];
        const missing = mustYes.filter(id => (visible.some(q => q.id === id)) && a[id] !== 'Yes');
        if (missing.length) return { type: 'MISSING_PREP', category: null, reason: 'UNCLEAR', gaps: missing, determinants };
        return { type: 'CERTIFICATE', category: 'HIGH', reason: null, gaps: [], determinants };
    }
    const medium = a.gpai_provider === 'Yes' || ['deepfake_disclosure', 'ai_interaction_disclosure', 'emotion_or_biocat'].some(k => a[k] === 'Yes');
    if (medium) {
        const checks = [];
        if (a.ai_interaction_disclosure === 'Yes') checks.push(a.confirm_transparency_interaction === 'Yes');
        if (a.deepfake_disclosure === 'Yes') checks.push(a.confirm_transparency_marking === 'Yes');
        if (a.emotion_or_biocat === 'Yes') checks.push(a.confirm_transparency_emobio === 'Yes');
        if (a.gpai_provider === 'Yes') checks.push(a.model_card === 'Yes');
        if (checks.every(v => v !== false)) return { type: 'CERTIFICATE', category: 'MEDIUM', reason: null, gaps: [], determinants: ['Transparency/GPAI duties acknowledged'] };
        return { type: 'MISSING_PREP', category: null, reason: 'UNCLEAR', gaps: ['Confirm transparency duties and/or add model card'], determinants: [] };
    }
    return { type: 'CERTIFICATE', category: 'LOW', reason: null, gaps: [], determinants: ['Scope within EU, no high-risk triggers'] };
}
