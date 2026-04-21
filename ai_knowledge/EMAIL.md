# Email Form Documentation

## Overview

The Flaat Studio website uses a contact form with honeypot + small rate limit spam protection that sends emails via Brevo SMTP.

## Architecture

```
Frontend (ContactSection.tsx)
        │
        ▼ POST with JSON + honeypot field
Backend API (api/contact/route.ts)
        │
        ▼ Check honeypot
        ▼ Rate limit
        ▼ Send via Brevo SMTP
Email (hi@flaat.studio)
```

## Frontend

### Component: `/components/home/ContactSection.tsx`

**Form Fields:**
| Field | Type | Required | Description |
|-------|------|---------|-------------|
| fullname | text | Yes | User's full name |
| email | email | Yes | User's email address |
| message | textarea | Yes | Project description |

**Flow:**
1. User fills form
2. Hidden `website` field stays empty for humans
3. POST to `/api/contact` with JSON payload
4. Show success/error status

### API Endpoint

**File:** `/app/api/contact/route.ts`

**Method:** `POST`

**Request Body:**
```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "message": "Looking for a new website",
  "website": ""
}
```

**Response:**
- Success: `{ "success": true, "messageId": "..." }`
- Error: `{ "error": "Spam detected" }`

## Backend

### Email Sending

**Transport:** Nodemailer with Brevo SMTP

**SMTP Settings:**
| Setting | Value |
|--------|-------|
| Host | `smtp-relay.brevo.com` |
| Port | `587` |
| Auth | User + Pass |

**Environment Variables:**
| Variable | Description |
|----------|-------------|
| `BREVO_USER_KEY` | Brevo SMTP username |
| `BREVO_API_KEY` | Brevo SMTP password |

### Spam Protection

**Honeypot:** hidden `website` field

**Rate limit:** 3 submissions per 10 minutes per IP

### Email Template

**From:** `Flaat Web Submission <hi@flaat.studio>`

**To:** `hi@flaat.studio`

**Reply-To:** User's email (for direct reply)

**Subject:** `{projectType} from {fullname}`

**HTML Template:** Styled with brand colors (m1: #2f4157, m2: #577c8e, m3: #c7d9e5, m4: #f4efeb)

## Environment Setup

```env
BREVO_USER_KEY=your_brevo_user_key
BREVO_API_KEY=your_brevo_api_key
```

## Error Handling

| Error | Status Code | Cause |
|-------|-----------|-------|
| Spam detected | 400 | Honeypot filled |
| Terlalu banyak pengiriman | 429 | Rate limit hit |
| Failed to send email | 500 | SMTP error |

## Testing

1. Fill the contact form
2. Submit form
3. Verify email received at hi@flaat.studio
4. Check reply-to field works
