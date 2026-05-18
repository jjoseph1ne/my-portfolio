import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProductUX from './pages/ProductUX'
import SoleluxeProject from './pages/SoleluxeProject'
import FudgetProject from './pages/FudgetProject'
import PrisenseProject from './pages/PrisenseProject'
import Marketing from './pages/Marketing'
import TNTProject from './pages/TNTProject'
import Photography from './pages/Photography'
import PhotographySections from './pages/PhotographySections'
import PhotographyArchive from './pages/PhotographyArchive'
import PhotographyPortrait from './pages/PhotographyPortrait'
import VisualWorksArchive from './pages/VisualWorksArchive'
import IrrigationProject from './pages/IrrigationProject'
import YummyProject from './pages/YummyProject'
import PlasticProject from './pages/PlasticProject'
import TracePathProject from './pages/TracePathProject'
import MyThoughtsProject from './pages/MyThoughtsProject'
import ZhongjingTeaProject from './pages/ZhongjingTeaProject'
import SketchProject from './pages/SketchProject'
import HighSchoolOfficialAccountProject from './pages/HighSchoolOfficialAccountProject'
import YearbookProject from './pages/YearbookProject'
import GraduationSeriesProject from './pages/GraduationSeriesProject'
import DigitalWebcamProject from './pages/DigitalWebcamProject'
import MazeSoccerProject from './pages/MazeSoccerProject'
import ShootProject from './pages/ShootProject'
import AgainstInterpretationProject from './pages/AgainstInterpretationProject'
import DancingCharactersProject from './pages/DancingCharactersProject'
import CauseWebsiteProject from './pages/CauseWebsiteProject'
import PersonalPortfolioWebsiteProject from './pages/PersonalPortfolioWebsiteProject'
import PoeticsInAIProject from './pages/PoeticsInAIProject'
import ScribeProject from './pages/ScribeProject'
import SymphonyProject from './pages/SymphonyProject'
import VisualChinaGroupProject from './pages/VisualChinaGroupProject'
import About from './pages/About'
import './App.css'

function AppRouter() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.search, location.hash])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductUX />} />
      <Route path="/product/soleluxe" element={<SoleluxeProject />} />
      <Route path="/product/fudget" element={<FudgetProject />} />
      <Route path="/product/prisense" element={<PrisenseProject />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/marketing/tnt" element={<TNTProject />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/photography/photography" element={<PhotographySections />} />
      <Route path="/photography/scenery" element={<PhotographyArchive />} />
      <Route path="/photography/portrait" element={<PhotographyPortrait />} />
      <Route path="/photography/visual-works" element={<VisualWorksArchive />} />
      <Route path="/photography/visual-works/irrigation" element={<IrrigationProject />} />
      <Route path="/photography/visual-works/yummy" element={<YummyProject />} />
      <Route path="/photography/visual-works/plastic" element={<PlasticProject />} />
      <Route path="/photography/visual-works/trace-the-path-of-me" element={<TracePathProject />} />
      <Route path="/photography/visual-works/my-thoughts" element={<MyThoughtsProject />} />
      <Route path="/photography/visual-works/zhongjing-tea" element={<ZhongjingTeaProject />} />
      <Route path="/photography/visual-works/sketch" element={<SketchProject />} />
      <Route path="/photography/visual-works/high-school-official-account" element={<HighSchoolOfficialAccountProject />} />
      <Route path="/photography/visual-works/yearbook" element={<YearbookProject />} />
      <Route path="/photography/visual-works/graduation-series" element={<GraduationSeriesProject />} />
      <Route path="/photography/visual-works/digital-webcam" element={<DigitalWebcamProject />} />
      <Route path="/photography/visual-works/maze-soccer" element={<MazeSoccerProject />} />
      <Route path="/photography/visual-works/shoot" element={<ShootProject />} />
      <Route path="/photography/visual-works/against-interpretation" element={<AgainstInterpretationProject />} />
      <Route path="/photography/visual-works/dancing-characters" element={<DancingCharactersProject />} />
      <Route path="/photography/visual-works/cause-website-building" element={<CauseWebsiteProject />} />
      <Route path="/photography/visual-works/personal-portfolio-website-building" element={<PersonalPortfolioWebsiteProject />} />
      <Route path="/photography/visual-works/poetics-in-ai" element={<PoeticsInAIProject />} />
      <Route path="/photography/visual-works/scribe" element={<ScribeProject />} />
      <Route path="/photography/visual-works/symphony" element={<SymphonyProject />} />
      <Route path="/photography/visual-works/visual-china-group" element={<VisualChinaGroupProject />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
