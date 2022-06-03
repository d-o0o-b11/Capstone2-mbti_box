import React from 'react'

const Modal = (props)=>{

    const {open, close, header, submit} = props;

    return(
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            <h3>{header}</h3>
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>

                        <main>{props.children}</main>

                        <footer>
                            <button className="close" onClick={submit}>
                                submit
                            </button>
                        </footer>
                    </section>
                ) : null}
    </div>

        </>
    )

}

export default Modal