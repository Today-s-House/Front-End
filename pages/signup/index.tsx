import useText from '../../hooks/useText';

const SignUp = () => {
    const userId = useText('');

    return (
        <div>
          <p>아이디</p>
          <input type="text" value={userId.value} onChange={userId.onChange}/>
        </div>
    );
};

export default SignUp;