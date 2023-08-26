import "./style.scss";

const Button = ({ text, targetId }) => {
    // const target = document.getElementById(targetId);

    // const scrollTo = () => {
    //     target.scrollIntoView({ behavior: "smooth" });
    // };
    return (
        <>
            <button
                class="button-85"
                onClick={() => {
                    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
                }}
                role="button"
            >
                {text}
            </button>
        </>
    );
};

export default Button;
