import { useState } from 'react';

const ROLES = [
  'Artist',
  'Parent or carer',
  'Supporter',
  'Organisation',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className="luc-page luc-narrow">
      <header className="luc-page-head">
        <p className="luc-eyebrow">Contact us</p>
        <h1>Say hello</h1>
        <p className="luc-lead">
          We want to hear from artists, parents and carers, and anyone who wants
          to help build a fun, inclusive studio.
        </p>
      </header>

      {submitted ? (
        <div className="luc-panel" role="status">
          <h2>Thank you</h2>
          <p>
            This trial site does not send messages yet. Your note stayed in the
            browser. When the collective’s contact details are live, this form
            will go through to us.
          </p>
        </div>
      ) : (
        <form className="luc-form" onSubmit={onSubmit}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            I am a
            <select name="role" defaultValue="Artist">
              {ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>
          <button type="submit" className="luc-btn luc-btn--primary">
            Send message
          </button>
        </form>
      )}
    </article>
  );
}
