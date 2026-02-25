import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // auto redirect after success
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center animate-fadeIn">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#c9a46a] flex items-center justify-center text-3xl text-[#c9a46a]">
            ✓
          </div>

          <h2 className="text-3xl font-serif text-[#123a3d] mb-3">
            Təşəkkür edirik!
          </h2>

          <p className="text-[#123a3d]/70">
            Rəyiniz uğurla göndərildi
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-white py-24 px-6">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="
          absolute top-6 left-6
          text-[#123a3d]
          transition
          hover:text-[#c9a46a]
        "
        aria-label="Back to home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="max-w-2xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-[#123a3d] mb-6">
          Təcrübənizi qiymətləndirin
        </h2>

        {/* STARS */}
        <div className="flex justify-center gap-2 mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="text-3xl transition"
            >
              <span
                className={
                  (hover || rating) >= star
                    ? "text-[#c9a46a]"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            </button>
          ))}
        </div>

        {/* SUBTITLE */}
        <p className="text-[#123a3d] text-lg mb-4">
          Fikrinizi bizimlə bölüşün
        </p>

        {/* TEXTAREA */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Rəyinizi burada qeyd edin"
          className="
            w-full
            min-h-[160px]
            rounded-xl
            border border-[#123a3d]/20
            px-6 py-4
            text-[#123a3d]
            placeholder:text-[#123a3d]/50
            focus:outline-none
            focus:border-[#c9a46a]
            transition
            resize-none
            mb-12
          "
        />

        {/* SUBMIT */}
        <button
          onClick={() => setSubmitted(true)}
          disabled={!rating}
          className="
            w-full md:w-auto
            px-14 py-4
            rounded-full
            bg-[#123a3d]
            text-[#c9a46a]
            tracking-wide
            transition
            hover:bg-[#c9a46a]
            hover:text-[#123a3d]
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          Rəyi göndər
        </button>
      </div>
    </section>
  );
};

export default ReviewForm;