import styles from "./index.module.css";

// This form is missing an onSubmit handler
export default function Comments({ comments }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Comments</h2>
      <ul role="list" className={styles.list}>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </ul>
      <form className={styles.form} aria-label="add comments about art piece">
        <label className={styles.label} htmlFor="comment">
          Add comment:
        </label>
        <textarea
          className={styles.textarea}
          type="text"
          id="comment"
          name="comment"
          rows="3"
          required
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
