import React from "react";
import Form from "../components/Form/Form";
import { FormCardContainer } from "components";
import { User } from "data/types";

interface FormPageProps {
  data?: string;
}

interface FormPageState {
  value: User[];
}

export default class FormPage extends React.Component<
  FormPageProps,
  FormPageState
> {
  state = {
    value: [] as User[],
  };
  render() {
    return (
      <div className="container">
        <h2>Form</h2>
        <div className="content-wrapper">
          <Form
            onSubmit={(user) => {
              this.setState(() => {
                const arr: User[] = [...this.state.value];
                arr.push(user);
                return { value: arr };
              });
            }}
          />
          {this.state.value.length > 0 && (
            <FormCardContainer data={this.state.value} />
          )}
        </div>
      </div>
    );
  }
}
