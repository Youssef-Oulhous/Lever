export const pipelineNodes = [
  {
    id: 1,
    type: 'sage',
    label: 'Data layer',
    title: 'Lead enrichment & verification',
    description: 'Clay waterfall enrichment across 12+ sources. ICP scoring at 95%+ accuracy. Every lead verified before it touches your outreach.',
    tools: ['Clay', 'Apollo', 'Clearbit'],
  },
  {
    id: 2,
    type: 'sage',
    label: 'Outreach layer',
    title: 'Multi-channel infrastructure',
    description: 'Multi-domain cold email + LinkedIn with full authentication, warmup, and deliverability monitoring at 99%+.',
    tools: ['Smartlead', 'HeyReach'],
  },
  {
    id: 3,
    type: 'copper',
    label: 'Intelligence layer',
    title: 'AI-powered automation',
    description: 'Custom n8n + Python workflows for lead scoring, email personalization, and research automation. 10-20 hrs saved per week.',
    tools: ['n8n', 'Python', 'Claude', 'Zapier'],
  },
  {
    id: 4,
    type: 'copper',
    label: 'Reporting layer',
    title: 'Revenue dashboards',
    description: 'Live dashboards tracking reply rates, meetings booked, pipeline generated, cost per lead, and channel attribution.',
    tools: ['Custom dashboards'],
  },
]
