# Google Analytics Setup Guide

## Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (Account ID: 374458327)
3. Create a new GA4 property or select an existing one
4. Go to **Admin** → **Data Streams** → Select your web stream
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Update the Measurement ID in Your Code

1. Open `dist/index.html`
2. Find the Google Analytics script section (around line 33-44)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID in **two places**:
   - In the script src URL: `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`
   - In the gtag config: `gtag('config', 'G-XXXXXXXXXX', ...)`

Example:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
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

✅ **Visitor Tracking**: Google Analytics tracks all page views and user interactions
✅ **Cookie Consent**: Users can accept or decline tracking
✅ **Visitor Count Display**: Shows approximate visitor count on the About page
✅ **Privacy Compliant**: IP anonymization enabled, cookie consent banner included

## How Visitor Count Works

The visitor count displayed on the website uses localStorage to track unique daily visits. This is a simple approximation. For accurate analytics, check your Google Analytics dashboard.

## Privacy & Compliance

- IP addresses are anonymized
- Cookie consent banner allows users to opt-out
- Tracking only occurs after user consent
- Complies with GDPR and privacy regulations

