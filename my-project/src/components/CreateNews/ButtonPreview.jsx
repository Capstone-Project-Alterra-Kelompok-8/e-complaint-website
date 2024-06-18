export default function ButtonPreview({ onClick }) {
    return (
        <button className="btn bg-slate-500 w-24 rounded-sm text-white" onClick={onClick}>
            Preview
        </button>
    );
}