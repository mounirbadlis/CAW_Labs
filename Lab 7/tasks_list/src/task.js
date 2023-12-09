import React from 'react';

class Task extends React.Component {
    handleDelete = () => {
        this.props.deleteTask(this.props.index);
    };

    render() {
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${this.props.index}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                maxWidth: '1400px',
                                width: 'auto',
                                flex: '1',
                            }}
                        >
                            {this.props.element.title}
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.handleDelete}
                        >
                            X
                        </button>
                    </button>
                </h2>
                <div
                    id={`collapse-${this.props.index}`}
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <ul>

                            {this.props.element["tasks"].map((subtask, subtaskIndex) => (
                                <li key={subtaskIndex}>{subtask}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;
