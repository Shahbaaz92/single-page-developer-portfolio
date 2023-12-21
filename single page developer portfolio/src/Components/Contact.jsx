function Contact() {
  return (
    <div>
      <section>
        <article>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </article>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name="message"
            id=" message"
            placeholder="Message"
          ></textarea>
          <button>Send message</button>
        </form>
      </section>
      <footer>
        <p className="logo">adamkeyes</p>
      </footer>
    </div>
  );
}
export default Contact;
