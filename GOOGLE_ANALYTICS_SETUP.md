# Google Analytics Setup Guide

## Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (Account ID: 374458327)
3. Create a new GA4 property or select an existing one
4. Go to **Admin** → **Data Streams** → Select your web stream
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Update the Measurement ID in Your Code

**Already configured** with Measurement ID `G-HHMRX6ZBCR`. If you ever need to change it:

1. Open `dist/index.html`
2. Find the Google Analytics `<script>` block in `<head>` (search for the current ID)
3. Replace it with your new Measurement ID in **two places**:
   - In the script src URL: `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`
   - In the gtag config: `gtag('config', 'G-XXXXXXXXXX', ...)`

Example:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  // Keep this consent default — it's what makes tracking actually opt-in.
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });
  gtag('config', 'G-ABC123XYZ', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

## Step 3: View Your Analytics Dashboard

1. Go to [Google Analytics Dashboard](https://analytics.google.com/)
2. Select your property
3. Navigate to **Reports** → **Realtime** to see live visitors
4. Navigate to **Reports** → **Engagement** → **Overview** for detailed analytics

## Features Implemented

✅ **Visitor Tracking**: Google Analytics tracks page views and user interactions, once consented
✅ **Cookie Consent**: Users can accept or decline tracking via the banner
✅ **Consent Mode**: Analytics storage defaults to `denied`; nothing is sent to Google until the
  visitor clicks Accept
✅ **Privacy Compliant**: IP anonymization enabled, cookie consent banner included

## How Consent Gating Works

`dist/index.html` calls `gtag('consent', 'default', { analytics_storage: 'denied' })` before
`gtag('config', ...)` loads, so Google Analytics collects nothing by default. In
`dist/js/main.js`:
- Clicking **Accept** calls `gtag('consent', 'update', { analytics_storage: 'granted' })` and
  fires an explicit `page_view` event.
- Clicking **Decline** leaves storage denied (no action needed — that's already the default).
- On a later visit, if `localStorage.cookiesAccepted === 'true'` from a prior session, consent is
  re-granted automatically on page load (Consent Mode doesn't persist "granted" across reloads by
  itself).

## Privacy & Compliance

- IP addresses are anonymized
- Cookie consent banner allows users to opt-in or decline
- Tracking only occurs after explicit user consent (enforced via Google Consent Mode, not just by
  convention)
- Consistent with GDPR-style consent-before-tracking practice

