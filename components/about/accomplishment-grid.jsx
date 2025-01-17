const workAccomplishments = [
  "Nullam dui nisl, ultricies ac suscipit nec, aliquet ut tortor. In sapien leo, blandit at est iaculis, tempor imperdiet tellus. Consectetur adipiscing elit.",
  "Morbi convallis elit ut risus rhoncus, quis ullamcorper massa accumsan. Consectetur adipiscing elit. Consectetur adipiscing elit.",
  "Nulla vulputate, nibh non aliquam egestas, lacus nulla bibendum nunc, in interdum turpis diam et nisi. Consectetur adipiscing elit. Lorem ipsum.",
  "Phasellus vestibulum, urna a vestibulum sollicitudin, sapien turpis pulvinar eros, at posuere lacus sapien sed erat. Consectetur adipiscing elit.",
  "Quisque egestas sagittis lectus, sit amet rutrum orci interdum vitae. Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Consectetur adipiscing elit.",
  "Morbi maximus egestas erat, eget auctor turpis dignissim at. Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Consectetur adipiscing elit.",
  "Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales. Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales.",
  "Vivamus vulputate commodo quam in pulvinar. Cras porttitor mattis laoreet. Sed congue, sem a ullamcorper sodales. Sed congue, sem a ullamcorper sodales.",
  "Nam rhoncus euismod turpis a iaculis. Pellentesque nulla lorem, faucibus a luctus eget, sollicitudin sit amet massa, faucibus a luctus eget, sollicitudin sit amet massa.",
];

export default function AccomplishmentGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-7xl">
        <div className="p-1">
          <div className="mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl">
            <h2 className="mb-4 font-serif text-[1.5rem] font-bold leading-snug text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white">
              Some accomplishments along the way!
            </h2>
          </div>
          <div className="gorder mt-4 grid grid-cols-1 gap-8 p-1 md:grid-cols-2 lg:mt-8 xl:mt-6 xl:grid-cols-3">
            {workAccomplishments.map((text, index) => (
              <p
                key={index}
                className="leading-6 transition-all md:leading-7 lg:rounded-lg lg:p-3 lg:leading-6 lg:shadow xl:p-5 xl:leading-7"
              >
                <span className="text-slate-500">&#9864; </span>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
