import { contato, ciclodev } from "@/data/contato";
import { Logo } from "@/components/Logo";

// A página do link da bio do Instagram da IT.IA (links.it-ia.tec.br): a marca e os atalhos principais
// em cartões grandes e arredondados, feitos para o dedo. Cabe inteira na tela de qualquer celular (ver globals.css).
const WHATS = contato.whatsapp;

type Atalho = { serie: string; nome: string; texto: string; href: string; icone: string; destaque?: boolean };
const atalhos: Atalho[] = [
  { serie: "01", nome: "WhatsApp", texto: "Fale com um especialista", href: WHATS, destaque: true,
    icone: "whatsapp" },
  { serie: "02", nome: "Site", texto: "Conheça a IT.IA", href: contato.site,
    icone: "site" },
  { serie: "03", nome: ciclodev.nome, texto: ciclodev.texto, href: ciclodev.link,
    icone: "ciclodev" },
  { serie: "04", nome: "E-mail", texto: contato.email, href: "mailto:" + contato.email,
    icone: "email" },
];

export default function Links() {
  const ano = new Date().getFullYear();
  return (
    <main id="conteudo" className="ln">
      <div className="ln-in">
        <header className="ln-cab">
          <div className="ln-avatar" aria-hidden="true"><Logo className="ln-avatar-logo" titulo="" /></div>
          <h1 className="titulo ln-nome">IT.IA<span className="titulo-ponto" aria-hidden="true" /></h1>
          <a className="ln-arroba" href={contato.instagram} target="_blank" rel="noopener noreferrer">{contato.instagramTexto}</a>
          <p className="ln-frase" lang="pt-BR">Tecnologia que sustenta a <mark className="ab-marca">operação</mark> das empresas, do escopo à entrega.</p>
          <p className="ln-tags">Sob medida<i aria-hidden="true" />Produtos próprios<i aria-hidden="true" />IA integrada</p>
        </header>

        <nav aria-label="Links da IT.IA" className="ln-lista">
          <h2 className="sr-only">Links</h2>
          {atalhos.map(a => {
            const externo = /^https?:/.test(a.href);
            return (
              <a key={a.serie} className={"ln-cartao" + (a.destaque ? " destaque" : "")} href={a.href} {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className="ln-icone">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={"/icones/" + a.icone + ".webp"} alt="" width={104} height={104} draggable={false} /></span>
                <span className="ln-txt"><b>{a.nome}</b><small>{a.texto}</small></span>
                <svg className="ln-seta" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M9 5l7 7-7 7" /></svg>
                {externo && <span className="sr-only"> (abre em outra aba)</span>}
              </a>
            );
          })}
        </nav>

        <footer className="ln-rod">
          <div className="ln-redes">
            <a className="ln-rede" href={contato.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da IT.IA">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" /></svg>
            </a>
            <a className="ln-rede" href={WHATS} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da IT.IA">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" /></svg>
            </a>
            <a className="ln-rede" href={"mailto:" + contato.email} aria-label="E-mail da IT.IA">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M3 5.5h18v13H3z M3 6l9 7 9-7" /></svg>
            </a>
          </div>
          <p className="ln-legais"><span>© {ano} IT.IA</span><span aria-hidden="true">·</span><a className="link" href={contato.privacidade}>Privacidade</a><span aria-hidden="true">·</span><a className="link" href={contato.termos}>Termos de Uso</a></p>
        </footer>
      </div>
    </main>
  );
}
