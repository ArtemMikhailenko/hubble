import { useState, useEffect } from 'react'
import styles from './ContactModal.module.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Block page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formsubmit.co/eugene@hubblegate.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
          form.reset()
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* Moon decoration */}
        <img
          src="/images/monn.png"
          alt=""
          className={styles.moonDecoration}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={styles.content}>
          {!isSuccess ? (
            <>
              <h2 className={styles.title}>Contact us</h2>
              <p className={styles.subtitle}>
                Fill out the form and we'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Hidden fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New contact from Hubble Gate" />
                <input type="hidden" name="_cc" value="duke@hubblegate.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact" className={styles.label}>
                    Telegram / Email
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    className={styles.input}
                    placeholder="@username or email@example.com"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Comment
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg viewBox="0 0 24 24" fill="none" width="64" height="64">
                  <circle cx="12" cy="12" r="10" stroke="#c7f854" strokeWidth="2" />
                  <path
                    d="M8 12l3 3 5-6"
                    stroke="#c7f854"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className={styles.successTitle}>Message sent!</h2>
              <p className={styles.successText}>
                Thank you for contacting us. We'll get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
