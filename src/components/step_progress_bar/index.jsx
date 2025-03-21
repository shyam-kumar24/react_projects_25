export default function ProgressBar({ activeState, handleNext, handlePrev }) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="main-container">
      <h1># Step Progress Bar</h1>
      <div className="div-container">
        {steps.map((step) => (
            <div key={step} className={`step-div ${activeState >= step ? 'active' : ''}`}>
            <span>Step {step}</span>
            </div>
        ))}
      </div>
      <div className="btn-div">
        <button
          className="prev-btn"
          onClick={() => handlePrev()}
          disabled={activeState === 1}
        >
          Previous
        </button>
        <button
          className="next-btn"
          onClick={() => handleNext()}
          disabled={activeState === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
}
