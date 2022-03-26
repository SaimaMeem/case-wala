import React from 'react';

const JSQues = () => {
    return (
        <div>
            {/* JavaScript Questions */}
            <h2 class="py-2 fw-bold mt-5 text-center">JavaScript Questions</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How does React Work?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        React is an open-source and free front-end JavaScript library for building front-end of any system based on UI components. React maintains a DOM tree which is known as <b>Virtual DOM</b>. This is a virtual representation of the real DOM. Whenever, any changes have been made, react compares the differences between current and previous virtual DOM and updates the virtual DOM accordingly. After that, the virtual DOM measures the best possible technique to make these updates to the real DOM which guarantees that there are less operations on the real DOM.

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How does useState() work?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        The <b>useState()</b> is a react hook that allows to have state variables in functional components. React has two different types of components and they are class components and functional components. Nowadays, functional components have been more used than functional components. This hook is a special function that takes the initial state as an argument and returns an array of two entries.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Differences between State and Props.
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <b>State</b> is an updatable structure which is used to store information about the component which can change time to time. The change in state can occur as a response to user action or system event. It is an integral part of react component which controls the behavior of the component and how it will render. Whereas, <b>Props</b> are read-only components. It is an object which stores the value of attributes of a component and works similarly as HTML attributes. It lets one component to pass data to another component. 
                        <br></br> 
                        <b>State</b> can only be modified or accessed inside the component or by the component directly. Whereas,  <b>props</b>  are immutable so it cannot be modified inside the component.



                        </div>
                    </div>
                </div>
            </div>
            {/* JavaScript Questions */}
        </div>
    );
};

export default JSQues;