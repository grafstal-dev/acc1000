export const EXCLUSIVE = ["I don't know", 'None', 'None apply', 'None of the above'];

export const questionnaire = [
    { id:'company_name', group:'identity', type:'text', label:'Company Name', required:true },
    { id:'company_address', group:'identity', type:'textarea', label:'Registered Address', required:true },
    { id:'contact_email', group:'identity', type:'email', label:'Contact Email For Results', required:true },
    { id:'project_name', group:'identity', type:'text', label:'Project or System Name', required:true },
    { id:'system_description', group:'context', type:'textarea', label:'Describe the AI system and what it does (1–3 sentences)', required:true, help:'State the intended task, users, and usage context.' },
    { id:'entity_role', group:'context', type:'multiselect', label:'Your Role(s) For This System', required:true, options:['Provider','Deployer (User)','Importer','Distributor'], tooltips:{ 'Provider':'Places a system on the market under own name/brand or substantially modifies an AI system.', 'Deployer (User)':'Uses/operates the AI system in own activities (e.g., an employer using a screening tool).', 'Importer':'Places on the EU market a system with a provider established outside the EU.', 'Distributor':'Makes a system available in the EU without altering it (e.g., reseller).', }},
    { id:'market_scope', group:'context', type:'single', label:'Will the system be placed on the EU market or used in the EU?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'purpose_primary', group:'purpose', type:'textarea', label:'Primary intended purpose (what outcome should the AI produce?)', required:true },
    { id:'users_affected', group:'purpose', type:'multiselect', label:'Who are the affected users/subjects?', required:true, options:['Employees','Job applicants','Students/Learners','Customers/Consumers','Citizens/General public','Patients','Other'], tooltips:{ 'Students/Learners':'Admissions, grading, proctoring, placement.', 'Employees':'Hiring, promotion, task allocation, monitoring.', 'Customers/Consumers':'Eligibility, pricing, recommendation impacts.', }},
    { id:'prohibited_practices', group:'risk_screen', type:'multiselect', label:'Does the system involve any prohibited practices?', required:true, options:[ 'Subliminal or purposefully manipulative or deceptive techniques causing significant harm', 'Exploiting vulnerabilities due to age, disability, or social/economic situation', 'Social scoring of natural persons', 'Predicting criminal risk based solely on profiling/personality traits', 'Creating/expanding facial recognition databases by untargeted scraping', 'Inferring emotions in workplaces or education institutions (except medical/safety)', 'Biometric categorisation to infer sensitive traits (race, politics, religion, union membership, sex life, sexual orientation)', 'None of the above','I don\'t know'] },
    { id:'biometric_public_rt', group:'risk_screen', type:'single', label:'Real-time remote biometric identification in publicly accessible spaces?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'annex3_domains', group:'annex3', type:'multiselect', label:'Select any applicable Annex III high-risk domains', required:true, options:[ 'Biometric identification & categorisation','Critical infrastructure management','Education & vocational training','Employment, worker management & access to self-employment','Access to essential services & public benefits','Law enforcement','Migration, asylum & border control','Administration of justice & democratic processes','None apply','I don\'t know'] },
    { id:'annex1_sectoral', group:'annex1', type:'multiselect', label:'Is the AI a safety component of, or itself, a product under Annex I laws?', required:true, options:[ 'Machinery','Toy safety','Recreational craft and personal watercraft','Lifts and safety components for lifts','ATEX — equipment for potentially explosive atmospheres','Radio equipment','Pressure equipment','Cableway installations','Personal protective equipment','Appliances burning gaseous fuels','Medical devices / In-vitro diagnostics','Civil aviation security / aviation','Motor vehicles & trailers / two- or three-wheel vehicles / agricultural & forestry vehicles','Marine equipment','Rail system','None','I don\'t know'] },
    { id:'gpai_provider', group:'gpai', type:'single', label:'Are you providing a General-Purpose AI (GPAI) model?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'gpai_systemic', group:'gpai', type:'single', label:'If yes: is the GPAI model designated or likely to be with systemic risk?', required:false, show_if:{ gpai_provider:'Yes' }, options:['Yes','No','I don\'t know'] },
    { id:'model_card', group:'gpai', type:'single', label:'For GPAI: will you publish a model/system card?', required:false, show_if:{ gpai_provider:'Yes' }, options:['Yes','No','I don\'t know'] },
    { id:'deepfake_disclosure', group:'transparency', type:'single', label:'Will the system generate or manipulate content presented as authentic (e.g., deepfakes)?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'ai_interaction_disclosure', group:'transparency', type:'single', label:'Will people interact with the AI system without it being obvious?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'emotion_or_biocat', group:'transparency', type:'single', label:'Will the system perform emotion recognition or biometric categorisation of individuals?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'confirm_transparency_interaction', group:'transparency_confirm', type:'single', label:'If AI interaction applies: will you inform users clearly at the point of interaction?', required:false, show_if:{ ai_interaction_disclosure:'Yes' }, options:['Yes','No','I don\'t know'] },
    { id:'confirm_transparency_marking', group:'transparency_confirm', type:'single', label:'If synthetic content applies: will you mark it as AI-generated/manipulated?', required:false, show_if:{ deepfake_disclosure:'Yes' }, options:['Yes','No','I don\'t know'] },
    { id:'confirm_transparency_emobio', group:'transparency_confirm', type:'single', label:'If emotion recognition/biometric categorisation applies: will you inform exposed persons?', required:false, show_if:{ emotion_or_biocat:'Yes' }, options:['Yes','No','I don\'t know'] },
    { id:'human_oversight', group:'controls', type:'single', label:'Is human oversight defined (who, when, how to intervene)?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'risk_management', group:'controls', type:'single', label:'Do you maintain an AI risk management process for this system? (providers)', required:true, show_if_role:'Provider', options:['Yes','No','I don\'t know'] },
    { id:'data_governance', group:'controls', type:'single', label:'Is there documented data governance for training/validation/test data?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'testing_robustness', group:'controls', type:'single', label:'Will the system be tested for accuracy, robustness, and cybersecurity before its launch?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'logging_traceability', group:'controls', type:'single', label:'Are logs/records kept to enable traceability of significant events and outputs?', required:true, options:['Yes','No','I don\'t know'] },
    { id:'tech_documentation', group:'controls', type:'single', label:'Do you maintain technical documentation sufficient for authorities/distributors/users? (providers)', required:true, show_if_role:'Provider', options:['Yes','No','I don\'t know'] },
    { id:'post_market_monitoring', group:'controls', type:'single', label:'Is there a post-market monitoring plan (incidents, corrective actions)? (providers)', required:true, show_if_role:'Provider', options:['Yes','No','I don\'t know'] },
    { id:'qms_present', group:'controls', type:'single', label:'Do you have a Quality Management System (QMS) covering the AI lifecycle? (providers)', required:true, show_if_role:'Provider', options:['Yes','No','I don\'t know'] },
    { id:'deployer_public_body', group:'fundamental_rights', type:'single', label:'Are you a public authority or a private entity providing public services? (deployers)', required:true, options:['Yes','No','I don\'t know'] },
    { id:'evidence_links', group:'evidence', type:'textarea', label:'Links or notes to any existing artifacts (policies, docs, tests)', required:false }
];

export function hasAny(v) { return Array.isArray(v) && v.some(x => !EXCLUSIVE.includes(x)); }
export function inScopeEU(a) { return a.market_scope !== 'No'; }
export function highContext(a) { return inScopeEU(a) && (hasAny(a.annex3_domains) || hasAny(a.annex1_sectoral) || a.biometric_public_rt === 'Yes'); }
export function visibleQuestions(a) { 
    const inEU = inScopeEU(a); 
    const roles = a.entity_role || []; 
    const high = highContext(a); 
    return questionnaire.filter(q => { 
        if (!inEU) return ['identity', 'context'].includes(q.group) || q.id === 'market_scope' || q.id === 'purpose_primary'; 
        if (q.group === 'controls' || q.group === 'fundamental_rights') { 
            if (!high) return false; 
            if (q.show_if_role && !roles.includes(q.show_if_role)) return false; 
        } 
        if (q.show_if) { 
            for (const [dep, val] of Object.entries(q.show_if)) {
                if (a[dep] !== val) return false; 
            }
        } 
        if (q.show_if_role && !roles.includes(q.show_if_role)) return false; 
        return true; 
    }); 
}
