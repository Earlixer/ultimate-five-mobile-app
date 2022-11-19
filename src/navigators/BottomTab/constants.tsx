
import { ICONS } from "../../assets"
import FixResults from "../../containers/screens/fixResults"
import Profile from "../../containers/screens/profile"
import Search from "../../containers/screens/search"
import Stats from "../../containers/screens/stats"
import UltimateFive from "../../containers/screens/ultimateFive"

const {fixResultBefore, statsBefore, ultimate5_before, search_before, user_before} = ICONS
export const tabData = [
	{
		label: 'Fixtures/Results',
		icon: fixResultBefore,
		component: FixResults
	},
	{
		label: 'Stats',
		icon: statsBefore,
		component: Stats
	},
	{
		label: 'UltimateFive',
		icon: ultimate5_before,
		component: UltimateFive
	},
	{
		label: 'Search',
		icon: search_before,
		component: Search
	},
	{
		label: 'Profile',
		icon: user_before,
		component: Profile
	}
]