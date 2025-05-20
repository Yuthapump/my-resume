import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <section id="services" className="my-14">
      <SectionHeading
        title="// Skilled & Tools :"
        // subtitle="I offer a wide range of services to ensure you have the best written code and stay ahead in the competition."
      />
      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <div key={index}>
            <h3 className="text-accent mb-2 text-xl font-bold">{service.topics[0]}</h3>
            <ServiceCard titles={service.titles} icons={service.icons} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
