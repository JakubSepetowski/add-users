import { ChangeEvent, useState } from 'react';
import { User } from '../../../types/Types';

type Props = {
	onAddUser: (user: User) => void;
	onValidForm: (isValid: false, err: string) => void;
};
export const Form = (props: Props) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const submintHandler = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userAge.length === 0 || userName.length === 0) {
			setUserName('');
			setUserAge('');
			props.onValidForm(false, 'Please enter a valid name and age (non-empty values)');
			return;
		}
		if (+userAge < 0 && userName.length > 0) {
			setUserName('');
			setUserAge('');
			props.onValidForm(false, 'Please enter a valid age (>0)');
			return;
		}

		const newUser: User = {
			id: Math.random(),
			userName: userName,
			userAge: userAge,
		};
		props.onAddUser(newUser);
		setUserName('');
		setUserAge('');
	};

	const userNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};
	const userAgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setUserAge(e.target.value);
	};
	return (
		<form onSubmit={submintHandler} className='pb-3 w-full'>
			<label className='mb-2 inline-block text-slate-100 text-lg'>Username</label>
			<input
				value={userName}
				onChange={userNameHandler}
				className='w-full focus:outline-none focus:ring focus:ring-emerald-500 '
				type='text'
			/>
			<label className='mb-2 mt-4 inline-block text-slate-100 text-lg'>Age</label>
			<input
				value={userAge}
				onChange={userAgeHandler}
				className='w-full focus:outline-none focus:ring focus:ring-emerald-500 '
				type='number'
			/>
			<button
				type='submit'
				className='self-start w-full mt-10 p-2 font-semibold bg-emerald-500 px-5 hover:scale-105 transition-colors duration-300   hover:bg-slate-100 hover:text-emerald-600 sm:w-auto  '>
				Add user
			</button>
		</form>
	);
};
