import Banner from "../../components/Banner"
import Banner1 from "../../components/Banner1"
import BlogPost from "../../components/BlogPost"
import FeaturedProfile from "../../components/FeaturedProfile"
import Hero from "../../components/Hero"
import PersonalizedMatching from "../../components/PersonalizedMatching"

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProfile />
      <Banner />
      <PersonalizedMatching />
      <Banner1 />
      <BlogPost />
    </div>
  )
}

export default Home
