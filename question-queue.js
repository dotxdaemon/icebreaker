// ABOUTME: Provides queue-based ordering for icebreaker questions.
// ABOUTME: Ensures questions rotate to the end after being shown.
export const createQuestionQueue = (initialQuestions = []) => {
  const normalizeQuestion = (question) => {
    if (typeof question === 'string') {
      const trimmed = question.trim();
      return trimmed ? trimmed : null;
    }

    if (question && typeof question === 'object') {
      const text = question.text;
      if (typeof text !== 'string') {
        return null;
      }

      const trimmed = text.trim();
      if (!trimmed) {
        return null;
      }

      return {
        ...question,
        text: trimmed,
      };
    }

    return null;
  };

  let queue = initialQuestions.map(normalizeQuestion).filter(Boolean);

  const setQuestions = (questions = []) => {
    queue = questions.map(normalizeQuestion).filter(Boolean);
  };

  const addQuestion = (question) => {
    const normalized = normalizeQuestion(question);
    if (!normalized) {
      return;
    }

    queue.push(normalized);
  };

  const next = () => {
    if (queue.length === 0) {
      return null;
    }

    const question = queue.shift();
    queue.push(question);
    return question;
  };

  const size = () => queue.length;

  return {
    addQuestion,
    next,
    setQuestions,
    size,
  };
};
