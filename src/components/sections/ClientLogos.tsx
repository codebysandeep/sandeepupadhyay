interface Client {
  name: string;
  logo?: string; // URL to logo image (optional, uses text if not provided)
}

const clients: Client[] = [
  { name: 'PwC' },
  { name: 'Standard Chartered' },
  { name: 'IBM' },
  { name: 'KPMG' },
  { name: 'MetLife' },
  { name: 'Commonwealth Bank' },
  { name: 'Chubb' },
];

export function ClientLogos() {
  return (
    <section className="py-10 lg:py-16 border-y border-border bg-secondary/30">
      <div className="container-page">
        {/* Label */}
        <p className="body-small text-stone-700 mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined icon-sm">verified</span>
          Trusted by Fortune 500 companies
        </p>

        {/* Logo Strip */}
        <div className="flex flex-wrap items-center gap-8 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              ) : (
                // Placeholder text logo
                <span className="text-lg lg:text-xl font-semibold text-stone-700 dark:text-stone-300 whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
