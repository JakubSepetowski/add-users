import { useState } from 'react';
import { Header } from './components/Header/Header';
import { NewUser } from './components/Main/NewUser';
import { Modal } from './components/Modal/Modal';
import { User } from './types/Types';

function App() {
	const [Users, setUsers] = useState<User[]>([]);
	const [isValid, setIsValid] = useState(true);
	const [errorMsg, setErrorMsg] = useState('');

	const rednerUsersHandler = (user: User) => {
		setUsers((prevUser) => {
			return [user, ...prevUser];
		});
	};
	const validFormHandler = (valid: boolean, error: string) => {
		setIsValid(valid);
		setErrorMsg(error);
	};
	return (
		<div className='flex flex-col justify-center items-center p-10'>
			<Header onRednerUsers={rednerUsersHandler} onValidForm={validFormHandler} />
			{Users.map((user) => {
				return <NewUser key={user.id} userInfo={user} />;
			})}
			<Modal isValid={isValid} onValidForm={validFormHandler} errorMsg={errorMsg} />
		</div>
	);
}

export default App;
