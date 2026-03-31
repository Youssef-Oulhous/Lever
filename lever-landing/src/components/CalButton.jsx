import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

const CAL_LINK = 'anas-fadili/free-gtm-audit'
const NAMESPACE = 'free-gtm-audit'
const UI_CONFIG = { theme: 'dark', hideEventTypeDetails: false, layout: 'month_view' }

/* ── Popup hook — use on every CTA button ────────────────── */
export function useCalPopup() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: NAMESPACE })
      cal('ui', UI_CONFIG)
    })()
  }, [])

  return async () => {
    const cal = await getCalApi({ namespace: NAMESPACE })
    cal('modal', { calLink: CAL_LINK, config: UI_CONFIG })
  }
}

/* ── Inline embed — used in FinalCTA section ─────────────── */
export function CalInline() {
  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: '100%', height: '100%', minHeight: '500px' }}
      config={UI_CONFIG}
    />
  )
}
