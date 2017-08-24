export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const openModal = (sessionType) => {
  return {
    type: OPEN_MODAL,
    sessionType,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
