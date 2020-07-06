import React, { Component } from "react";
import Modal from "../../components/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const errorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    hideErrorModal = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} hide={this.hideErrorModal}>
            <div>{this.state.error ? this.state.error.message : null}</div>
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default errorHandler;
