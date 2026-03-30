export interface RegistrationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  localGovernment: string;
  refereeFullName: string;
  refereeEmail: string;
  refereePhone: string;
  refereeRole: string;
  photoFilename?: string;
}

export function generateRegistrationEmailHTML(data: RegistrationEmailData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Volunteer Registration</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 20px;
          text-align: center;
          color: white;
        }
        .header h1 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .header p {
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 40px 30px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .info-item {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 12px;
          font-weight: 600;
          color: #667eea;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .info-value {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .donation-section {
          background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 30px 0;
          border-radius: 6px;
        }
        .donation-section h3 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .donation-section p {
          color: #555;
          font-size: 14px;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        .donation-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .donation-btn {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          transition: transform 0.3s ease;
        }
        .donation-btn:hover {
          transform: translateY(-2px);
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
        .footer p {
          font-size: 12px;
          color: #666;
          margin-bottom: 10px;
        }
        .divider {
          border: none;
          border-top: 1px solid #e0e0e0;
          margin: 20px 0;
        }
        .success-badge {
          display: inline-block;
          background: #4CAF50;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="success-badge">✓ New Registration Received</div>
          <h1>New Volunteer Registration</h1>
          <p>A new volunteer has submitted their registration form</p>
        </div>

        <!-- Main Content -->
        <div class="content">
          <div class="section">
            <div class="section-title">📋 Personal Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">First Name</div>
                <div class="info-value">${escapeHtml(data.firstName)}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Last Name</div>
                <div class="info-value">${escapeHtml(data.lastName)}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #667eea; text-decoration: none;">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value"><a href="tel:${escapeHtml(data.phone)}" style="color: #667eea; text-decoration: none;">${escapeHtml(data.phone)}</a></div>
              </div>
              <div class="info-item full-width">
                <div class="info-label">Address</div>
                <div class="info-value">${escapeHtml(data.address)}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">📍 Location</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">State</div>
                <div class="info-value">${escapeHtml(data.state)}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Local Government</div>
                <div class="info-value">${escapeHtml(data.localGovernment)}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">👤 Referee Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${escapeHtml(data.refereeFullName)}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Role</div>
                <div class="info-value">${escapeHtml(data.refereeRole)}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value"><a href="mailto:${escapeHtml(data.refereeEmail)}" style="color: #667eea; text-decoration: none;">${escapeHtml(data.refereeEmail)}</a></div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value"><a href="tel:${escapeHtml(data.refereePhone)}" style="color: #667eea; text-decoration: none;">${escapeHtml(data.refereePhone)}</a></div>
              </div>
            </div>
          </div>

          ${data.photoFilename ? `
          <div class="section">
            <div class="section-title">📷 Photo</div>
            <div class="info-item">
              <div class="info-label">Filename</div>
              <div class="info-value">${escapeHtml(data.photoFilename)}</div>
            </div>
          </div>
          ` : ''}

          <!-- Donation/Support Section -->
          <div class="donation-section">
            <h3>🤝 Help Support Our Cause</h3>
            <p>
              If you're passionate about human rights and would like to contribute financially to our mission,
              we'd greatly appreciate your support. Every donation helps us continue our vital work in advocacy and protection.
            </p>
            <div class="donation-buttons">
              <a href="https://www.paypal.com/donate?hosted_button_id=XXXXX" class="donation-btn" style="color: white;">💳 Donate via PayPal</a>
              <a href="#" class="donation-btn" style="color: white;">🏦 Bank Transfer</a>
              <a href="#" class="donation-btn" style="color: white;">📱 Mobile Money</a>
            </div>
          </div>

          <div class="divider"></div>

          <p style="color: #666; font-size: 14px;">
            Thank you for joining our volunteer network! If you have any questions or need further assistance,
            please don't hesitate to reach out.
          </p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p><strong>HRVC - Human Rights Volunteer Corps</strong></p>
          <p>Fighting for human rights and social justice</p>
          <p style="margin-top: 15px; color: #999; font-size: 11px;">
            © 2026 HRVC. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
