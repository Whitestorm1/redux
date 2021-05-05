import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import GenericBtn from "../component/genericBtn"
import Button from './Button';

export default function ReduxForm({ label, color, height, radius, width }) {
    const [name, setName] = useState("")
    const formSubmitted = (e) => {
        e.preventDefault();
    }
    const abcd = () => {
        console.log("called function through props");
    }
    return (
        <div >

            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10%",
                width: "53%",
                marginLeft: "53%"
            }}
            >

                <Form style={{ width: "50%" }} onSubmit={formSubmitted}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style=
                            {{
                                display: "flex",
                                justifyContent: "center",
                            }}>Email address</Form.Label>
                        <Form.Control style=
                            {{
                                display: "flex",
                                justifyContent: "center",
                            }} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style=
                            {{
                                display: "flex",
                                justifyContent: "center",
                            }}>Password</Form.Label>
                        <Form.Control style=
                            {{
                                display: "flex",
                                justifyContent: "center",
                            }} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <GenericBtn

                    >
                        submit
    </GenericBtn>
                    <Button width={"150px"} color={"blue"} content={"custom Button"} clickedFunction={abcd} type={"text"} default={"enter name"} value={name} changed={setName} />


                </Form>
            </div>
        </div>
    )
}
