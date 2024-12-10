"use client";

export const handleViewMore = (page: number, setPage: (page: number) => void, fetchMovies: (page: number) => void) => {
  const nextPage = page + 1; // Incrementa la página
  setPage(nextPage); // Actualiza el estado
  fetchMovies(nextPage); // Llama a la API con la nueva página
};
