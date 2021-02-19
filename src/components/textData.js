import moduleName from 'module'
import BoilAni from './animations/BoilAni'
import NotifyAni from './animations/NotifyAni'
import SignAni from './animations/SignAni'
export const textData = [
  {
    heading: 'The Solution',
    text: 'Establish Boil Water notifications as a part of the Public Safety Alert ',
    Animation: <BoilAni />
  },
  {
    heading: 'How To Get there?',
    text: 'Add boil water notifications to Public Safety Alert system so that smartphones are notfied',
    Animation: <NotifyAni />
  },
  {
    heading: 'How To You Can Help?',
    text: 'Sign the petition to bring local officials awareness to the issue',
    Animation: <SignAni />
  },
]