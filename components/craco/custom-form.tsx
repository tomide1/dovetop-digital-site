"use client";

import { useState, useEffect } from "react"


const CustomForm = () => {
	const [email, setEmail] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [companyNumber, setCompanyNumber] = useState('');
	const [enquiry, setEnquiry] = useState('');
	const [status, setStatus] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("--submitted--")
		email &&
		companyName &&
		enquiry &&
		email.indexOf("@") > -1 &&
		fetch(`https://dovetopdigital.us14.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_REACT_APP_MAILCHIMP_ID}&MERGE0=${email}&MERGE1=${companyName}`, 
		{
			// mode: "no-cors", 
			method: "POST",
			// body: JSON.stringify({ MERGE6: enquiry })
		})
		.then(response => response.json())
		.then(json => {
			console.log(json)
			setStatus("success")
			setMessage("Your enquiry has been received!")
		})
		.catch(error => {
			// setStatus("success")
			// setMessage("Your enquiry has been received!")
			setStatus('error')
			setMessage('There was an error sending your query!')
			console.error(error)
		});
	}

	useEffect(() => {
    if(status === "success") {
			setCompanyName('');
			setCompanyNumber('');
			setEmail('');
			setEnquiry('');
		};
  }, [status], )

	return(
		<form className="max-w-xs mx-auto sm:max-w-lg flex flex-col sm:justify-center " data-aos="zoom-y-out" data-aos-delay="300" onSubmit={(e) => handleSubmit(e)}>
			{status === "sending" && (
				<svg style={{color:"#1BA9BB"}} className="animate-spin h-5 w-5" viewBox="0 0 24 24" />
			)}
			{status === "error" && (
				<div 
					style={{color:"#F05653"}}
					className="text-center text-xl font-bold"
					dangerouslySetInnerHTML={{ __html: message }}
				/>
			)}
			{status === "success" && (
				<div
				 	style={{color:"#1BA9BB"}}
					className="text-center font-bold text-xl"
					dangerouslySetInnerHTML={{ __html: message }}
				/>
			)}

			{status !== "success" && (
				<div className="w-full">
					<div className="flex flex-col justify-items-center max-w-xs mx-auto sm:max-w-lg lg:mx-0">
						{/* <div className="flex flex-row justify-between">
							<div className="flex flex-col justify-start"> */}
								{/* <label htmlFor="companyName" className="text-left text-white">Company Name</label> */}
								<input 
									name="companyName"
									id="companyName"
									type="text" 
									value={companyName} 
									onChange={(e) => setCompanyName(e.target.value)} 
									className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 placeholder-gray-500" 
									placeholder="First Name" 
									aria-label="Your Company Name"
									required 
								/>
								{/* <label htmlFor="email" className="text-left text-white">Company Email</label> */}
								<input 
								  id="email"
									name="email"
									type="email" 
									value={email} 
									onChange={(e) => setEmail(e.target.value)} 
									className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 placeholder-gray-500" 
									placeholder="Email Address" 
									aria-label="Your company email"
									autoComplete="true"
									required 
								/>
								{/* <label htmlFor="phoneNumber" className="text-left text-white">Company Phone Number</label>
								<input 
									id="phoneNumber"
									name="phoneNumber"
									type="phoneNumber" 
									value={companyNumber} 
									onChange={(e) => setCompanyNumber(e.target.value)} 
									className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 placeholder-gray-500" 
									placeholder="07477778888" 
									aria-label="Your phone number" 
								/> */}
							</div>
							<div className="flex flex-col justify-start">
								{/* <label htmlFor="enquiry" className="text-left text-white">Your enquiry</label>
								<textarea
									id="enquiry"
									name="enquiry"
									value={enquiry} 
									onChange={(e) => setEnquiry(e.target.value)} 
									className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 placeholder-gray-500" 
									placeholder="Lorem Ipsum Deo Dignum Paris Mon Deu Lapelle" 
									aria-label="Your Enquiry"
								/> */}
								<div className="items-center">
									<button
										// type="submit"
										className="btn text-white shadow w-2/5 bg-gradient-to-r from-blue-500 to-teal-400" 
										onClick={(e) => handleSubmit(e)}
									>
										Submit
									</button>
								</div>
							{/* </div>
						</div> */}	
					</div>
					{/* Success message */}
					{/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
				</div>
			)}
			{/* <div>
				<a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
			</div>
			<div>
				<a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
			</div> */}
		</form>
	);
}

export default CustomForm;
