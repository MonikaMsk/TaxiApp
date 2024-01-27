import { RideItem } from 'types/rideItem';

type Section = {
	title: string;
	data: RideItem[];
};

export const rideData: Section[] = [
	{
		title: 'Recommended',
		data: [
			{
				type: 'UberX',
				description: 'Good price',
				eta: 5,
				maxPassangers: 4,
				id: '1',
				price: {
					perKm: 0.8,
					perMinute: 0.5,
					currenct: '€',
				},
			},
		],
	},
	{
		title: 'Recommended',
		data: [
			{
				type: 'Van',
				description: 'Good price',
				eta: 8,
				maxPassangers: 4,
				id: '2',
				price: {
					perKm: 1.2,
					perMinute: 0.7,
					currenct: '€',
				},
			},
		],
	},
	{
		title: 'Recommended',
		data: [
			{
				type: 'UberX',
				description: 'Good price',
				eta: 10,
				maxPassangers: 2,
				id: '3',
				price: {
					perKm: 1,
					perMinute: 0.7,
					currenct: '€',
				},
			},
		],
	},
	{
		title: 'Popular',
		data: [
			{
				type: 'Uber parcel',
				description: 'Good price',
				eta: 2,
				maxPassangers: null,
				id: '4',
				price: {
					perKm: 0.9,
					perMinute: 0.6,
					currenct: '€',
				},
			},
		],
	},
	{
		title: 'Popular',
		data: [
			{
				type: 'Uber Pets',
				description: 'Good price',
				eta: 3,
				maxPassangers: 6,
				id: '4',
				price: {
					perKm: 0.5,
					perMinute: 0.4,
					currenct: '€',
				},
			},
		],
	},
	{
		title: 'Economy',
		data: [
			{
				type: 'Uber Scooter',
				description: 'Good price',
				eta: 1,
				maxPassangers: 1,
				id: '5',
				price: {
					perKm: 0.3,
					perMinute: 0.2,
					currenct: '€',
				},
			},
		],
	},
];
