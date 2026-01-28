// ABOUTME: Provides queue-based ordering for icebreaker questions.
// ABOUTME: Ensures questions rotate to the end after being shown.
export const createQuestionQueue = (initialQuestions = []) => {
  let queue = [...initialQuestions];

  const setQuestions = (questions = []) => {
    queue = [...questions];
  };

  const addQuestion = (question) => {
    if (typeof question !== 'string') {
      return;
    }

    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    queue.push(trimmed);
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
