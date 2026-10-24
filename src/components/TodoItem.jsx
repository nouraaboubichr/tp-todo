function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li>
      <label
        style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
        />{' '}
        {tache.texte}
      </label>{' '}
      <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;