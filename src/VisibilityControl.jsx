
export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want do delete it?')) {
        cleanTasks()
    }
   
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Tasks Performed </label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
