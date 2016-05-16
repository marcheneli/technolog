import * as React from 'react';


export default class Sigin extends React.Component<any, any>{
    handleSiginFormSubmit = ({email, password}): void => {
        this.props.signinUser(email, password);
    }

    render() {
        const {handleSubmit, fields: {email, password}} = this.props;
        return (
            <div style={{
                position: 'relative',
                top: 200 + 'px',
                margin: 0 + ' auto',
                width: 400 + 'px',
                zIndex: 1050
            }}>
                <form onSubmit={handleSubmit(this.handleSiginFormSubmit)}>
                    <fieldset className="form-group">
                        <label>Email: </label>
                        <input className="form-control" {...email}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Password: </label>
                        <input className="form-control" type="password" {...password}/>
                    </fieldset>
                    <button action="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}