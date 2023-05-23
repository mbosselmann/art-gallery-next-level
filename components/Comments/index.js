"use client";

import { useArtPiecesContext } from "@/lib/context.js";
import styles from "./index.module.css";

// This form is missing an onSubmit handler
export default function Comments({ slug }) {
  const { addComment } = useArtPiecesContext();
  const { artPiecesInfo } = useArtPiecesContext();
  const comments = artPiecesInfo.find((piece) => piece.slug === slug)?.comments;

  function handleSubmit(event) {
    event.preventDefault();
    addComment(slug, event.target.elements.comment.value);
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Comments</h2>
      {comments?.length > 0 && (
        <ul role="list" className={styles.list}>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <q>{comment}</q>
              </p>
            </li>
          ))}
        </ul>
      )}
      <form
        className={styles.form}
        aria-label="add comments about art piece"
        onSubmit={handleSubmit}
      >
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
