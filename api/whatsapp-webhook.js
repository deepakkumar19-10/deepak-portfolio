/**
 * Vercel Serverless Function — WhatsApp Cloud API & Twilio Webhook
 * Automated AI Assistant Persona for WhatsApp
 * 
 * Endpoint: /api/whatsapp-webhook
 */

export default async function handler(req, res) {
  const VERIFY_TOKEN = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || 'deepak_portfolio_webhook_secret_2026';

  // 1. Webhook Verification for Meta WhatsApp Cloud API (GET)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('[Webhook] WhatsApp Verification Succeeded');
      return res.status(200).send(challenge);
    } else {
      return res.status(403).json({ error: 'Verification token mismatch' });
    }
  }

  // 2. Incoming WhatsApp Message Handler (POST)
  if (req.method === 'POST') {
    try {
      const body = req.body;
      console.log('[Webhook] Received WhatsApp event:', JSON.stringify(body, null, 2));

      // Twilio or Meta WhatsApp Cloud format extraction
      const messageText =
        body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body ||
        body?.Body ||
        '';
      const fromNumber =
        body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from ||
        body?.From ||
        '';

      if (!messageText) {
        return res.status(200).json({ status: 'no_message_body' });
      }

      // Persona Response logic
      let replyText = '';
      const query = messageText.toLowerCase();

      if (query.includes('hire') || query.includes('job') || query.includes('project') || query.includes('work')) {
        replyText = `Hi! I am Deepak Kumar's AI Assistant.\n\nDeepak is a Mobile & Frontend Developer specializing in React Native and React.js (Creator of divyabraj.com & MMM Mobile App). He is available to join immediately!\n\nPlease share your company name, role/project requirements, and timeline. Deepak will follow up with you personally shortly!`;
      } else if (query.includes('skill') || query.includes('stack')) {
        replyText = `Deepak's Core Stack:\n• React Native (Android & iOS)\n• React.js, TypeScript & Tailwind CSS\n• Redux Toolkit & REST APIs with Axios\n• Offline storage with AsyncStorage\n\nDeepak has an MCA from GLA University and is available immediately.`;
      } else {
        replyText = `Namaste! Thank you for messaging Deepak Kumar.\n\nI am his automated AI Assistant. Deepak specializes in React Native & React.js development (Creator of divyabraj.com). Deepak will review your message and reply personally. If urgent, email: deepakkumar19152002@gmail.com.`;
      }

      console.log(`[Webhook] Generated reply for ${fromNumber}: ${replyText}`);

      // Return response
      return res.status(200).json({
        status: 'success',
        from: fromNumber,
        reply: replyText
      });
    } catch (err) {
      console.error('[Webhook] Error handling event:', err);
      return res.status(500).json({ error: 'Internal webhook error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
