'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Nome e Cognome <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={onChange}
          placeholder="Mario Rossi"
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onChange}
          placeholder="mario.rossi@azienda.it"
          className="form-input"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            placeholder="+39 333 1234567"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Azienda
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={onChange}
            placeholder="Nome Azienda S.r.l."
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Messaggio <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={onChange}
          placeholder="Descrivi brevemente le tue esigenze..."
          className="form-input resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`btn-primary w-full text-base ${
          status === 'success' ? 'bg-green-500 hover:bg-green-500' : 'btn-navy'
        }`}
      >
        {status === 'loading' && (
          <>
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span>Invio in corso...</span>
          </>
        )}
        {status === 'success' && (
          <>
            <Check size={18} />
            <span>Messaggio inviato!</span>
          </>
        )}
        {status === 'idle' && (
          <>
            <Send size={18} />
            <span>Invia richiesta</span>
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center pt-1">
        I campi contrassegnati con <span className="text-red-500">*</span> sono obbligatori
      </p>
    </form>
  );
}
