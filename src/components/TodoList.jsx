import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
  if (taches.length === 0) {
    return <p>Aucune tâche pour le moment. Profitez de votre journée !</p>;
  }

  return (
    <ul>
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;