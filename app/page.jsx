'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from '@/app/components/UserCard'
import UserCardSkeleton from '@/app/components/UserCardSkeleton'

export default function Home() {
	// State to store the list of users
	const [users, setUsers] = useState([])
	// State to store the currently selected user
	const [selectedUser, setSetselectedUser] = useState(null)
	// State to store the ID of the currently selected user
	const [id, setId] = useState(null)
	// State to store any errors that occur during data fetching
	const [error, setError] = useState(null)

	// Effect to fetch users from the API
	useEffect(() => {
		(async function fetchUsers() {
			try {
				const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
				const data = response?.data
				setUsers(data)
			} catch (err) {
				setError('Failed to fetch users')
				console.error(err)
			}
		})();
	}, [])

	// Effect to set the selected user based on the ID
	useEffect(() => {
		if (id) {
			const selected = users.find(user => user?.id === id);
			setSetselectedUser(selected);
		}
	}, [id]) 

	// Render error message if there is an error
	if (error) {
		return <div className="bg-red-100 text-red-800 p-4 rounded-md border border-red-200 shadow-sm text-center">
			Server Error! Please try after some time
			</div>;
	}

	// Main component rendering
	return (
		<main className="bg-slate-100 text-white flex flex-col-reverse md:flex-row justify-center p-4 lg:p-10 gap-5 relative max-w-7xl mx-auto">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center gap-5 md:w-8-12 lg:w-9/12">
				{
					users.length > 0 ?
						users.map((user) => (
							<UserCard key={user?.id} {...user} setId={setId} />
						))
						:
						Array.from({ length: 12 }, (_, index) => (
							<UserCardSkeleton key={index} />
						))
				}
			</div>
			<div className="w-full md:w-4/12 lg:w-3/12 flex flex-col sticky top-0 h-fit bg-gray-100">
				<h1 className="text-2xl font-bold mb-4 text-black text-center">User Details</h1>
				<div className="p-4 bg-slate-400 rounded-lg shadow-md">
					{
						selectedUser ?
							<div>
								<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
									<img
										src={selectedUser?.avatar || '/usernotfound.png'}
										alt="User Avatar"
										className="w-32 h-32 rounded-full border-2 border-gray-300"
									/>
									<div className="mt-4 w-full text-center">
										<label className="text-gray-700 font-medium block">Username:</label>
										<h2 className="text-xl font-bold text-gray-900">{selectedUser?.profile?.username || 'N/A'}</h2>
									</div>
									<div className="mt-2 w-full text-center">
										<label className="text-gray-700 font-medium block">Job Title:</label>
										<p className="text-sm text-gray-600">{selectedUser?.jobTitle || 'N/A'}</p>
									</div>
									<div className="mt-2 text-center w-full">
										<label className="text-gray-700 font-medium block">Bio:</label>
										<p className="text-gray-700">{selectedUser?.Bio || 'No bio available'}</p>
									</div>
									<div className="mt-3 w-full text-center">
										<label className="text-gray-700 font-medium block">Name:</label>
										<p className="text-gray-800 font-medium">
											{selectedUser?.profile?.firstName || 'N/A'} {selectedUser?.profile?.lastName || ''}
										</p>
										<label className="text-gray-700 font-medium block mt-2">Email:</label>
										<p className="text-gray-500 text-sm">{selectedUser?.profile?.email || 'N/A'}</p>
									</div>
								</div>

							</div>
							:
							<div className="">
								No user selected! Please select a user
							</div>
					}
				</div>
			</div>
		</main>
	);
}
