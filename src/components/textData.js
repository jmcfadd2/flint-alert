import BoilAni from './animations/BoilAni'
import NotifyAni from './animations/NotifyAni'
import SignAni from './animations/SignAni'
export const textData = [
  {
    heading: 'The Solution',
    text: 'Establish Boil Water notifications as a part of the Public Safety Alert ',
    Animation: <BoilAni />,
    callToAction: null,
    name: 'solution'
  },
  {
    heading: 'How To Get There?',
    text: 'Add boil water notifications to Public Safety Alert system so that smartphones are notified',
    Animation: <NotifyAni />,
    callToAction: null,
    name: 'how'
  },
  {
    heading: 'How You Can Help?',
    text: 'Sign the petition to bring local official\'s awareness to the issue',
    Animation: <SignAni />,
    callToAction: 'Sign Here',
    name: 'help'
  },
]