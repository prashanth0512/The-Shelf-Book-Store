document.addEventListener('DOMContentLoaded', () => {


  const services = {
    "reading-consultation": {
      title: "Personal Reading Consultation",
      subtitle: "Establish your custom literary taste map with our certified book experts.",
      badge: "✦ Personal Curation",
      ctaText: "Book Consultation",
      ctaLink: "./contact.html?service=reading-consultation",
      heroImg: "./service_consultation.png",
      overviewImg: "./cozy_bookstore_hero.png",
      overviewTag: "ONE-ON-ONE ADVISORY",
      overviewTitle: "Discover Your Next Great Obsession",
      desc1: "Reading is deeply personal, yet most readers rely on broad best-seller lists or automated algorithms. At The Shelf, we believe in a human-centric approach to discovering literature. Our Personal Reading Consultation pair-programs your literary journey with a seasoned curator who understands historical context, genre evolution, and the subtle textures of writing style.",
      desc2: "During your 60-minute session, we will analyze your current reading habits, past favorites, and goals—whether you're looking to dive into classical philosophy, explore contemporary magic realism, or read more diversely. We translate this discussion into a bespoke Reading Journal and purchase pathway customized just for you.",
      bullets: [
        { title: "Custom Taste Map", desc: "A visual mapping of genres, authors, and themes that align with your intellectual curiosity." },
        { title: "Bespoke Reading Journal", desc: "A physical, hand-bound notebook detailing your curated reading list and custom reading prompts." },
        { title: "Curator Access", desc: "Direct email contact with your assigned literary curator for follow-up recommendations." }
      ],
      timeline: [
        { title: "The Intake Questionnaire", desc: "Fill out a short, thoughtful questionnaire about your reading history, style preferences, and lifestyle constraints before we meet." },
        { title: "One-on-One Session", desc: "Spend 60 minutes in our private reading salon (or via video call) discussing your goals, tastes, and interests with a dedicated curator." },
        { title: "Bespoke Portfolio Delivery", desc: "Within 48 hours, receive your custom reading itinerary, including 12 handpicked books with detailed explanations for each choice." },
        { title: "Continuous Guidance", desc: "Access direct communication channels for seasonal updates, priority alerts on incoming books, and follow-up consultation bookings." }
      ],
      benefits: [
        { icon: "fas fa-brain", title: "Tailored to You", desc: "Every selection is vetted for your specific interests, vocabulary comfort, and reading pace." },
        { icon: "fas fa-coffee", title: "Salon Ambience", desc: "Enjoy complimentary premium tea or coffee in our private library space during your in-person session." },
        { icon: "fas fa-book-open", title: "Curated Portfolio", desc: "Receive a personalized portfolio with custom annotations, reviews, and reading notes for each title." },
        { icon: "fas fa-tags", title: "Exclusive Offers", desc: "Enjoy a 10% discount on all books purchased from your curated reading list during the next 6 months." }
      ],
      gallery: [
        "./cozy_bookstore_hero.png",
        "./book_pile_hero.png",
        "./about_hero.png"
      ],
      faqs: [
        { question: "Is this service available online?", answer: "Yes! While we love hosting sessions in our physical cozy salon, we offer fully remote video consultations for readers around the world. Your reading journal and curated catalog will be shipped globally." },
        { question: "How long does it take to get my reading profile?", answer: "Your curator will construct and dispatch your personalized Reading Portfolio and custom physical journal within 48 hours of your consultation session." },
        { question: "What if I have already read some of the recommended books?", answer: "No problem at all! In your questionnaire and discussion, you can specify what you've read. If any title in the final list is a repeat, we will provide a direct alternative immediately." }
      ],
      footerCtaTitle: "Begin Your Reading Journey",
      footerCtaDesc: "Schedule your one-on-one reading consultation and receive a custom-tailored map of books designed just for you.",
      footerCtaBtnText: "Schedule Appointment"
    },
    "rare-books": {
      title: "Rare Book Sourcing",
      subtitle: "Task our global network of book dealers and scouts to locate certified first editions, signed copies, or custom bindings.",
      badge: "✦ Antique & Collectible",
      ctaText: "Inquire Sourcing",
      ctaLink: "./contact.html?service=rare-books",
      heroImg: "./service_rare.png",
      overviewImg: "./rare_books_showcase.png",
      overviewTag: "ANTIQUARIAN HUNT",
      overviewTitle: "Unearth Literary Treasures",
      desc1: "For the dedicated collector, a book is not just content—it is a piece of history, an object of art, and a physical testament to the passage of time. Our Rare Book Sourcing service leverages a secretive, decades-old global network of antiquarian scouts, private estates, and auction houses to locate items that cannot be found on standard digital markets.",
      desc2: "Whether you are searching for a signed 1920s first edition of F. Scott Fitzgerald, an out-of-print historical monograph, or a book bound in custom decorative leather, we conduct exhaustive searches. Every item we source goes through a rigid vetting process to guarantee authenticity, condition status, and legal provenance.",
      bullets: [
        { title: "Provenance Vetting", desc: "Rigorous certification of ownership history, signature validation, and edition verification." },
        { title: "Global Scouting Network", desc: "Private access to estate sales, specialized dealers, and auction house inventories in Europe and the Americas." },
        { title: "Custom Conservation", desc: "Partnerships with local master bookbinders to repair, restore, or re-bind delicate editions." }
      ],
      timeline: [
        { title: "Define the Search Profile", desc: "Meet with our rare book specialist to define the specific title, edition, budget, and acceptable condition ranges." },
        { title: "Network Dispersal", desc: "We dispatch query profiles to our global web of specialized dealers and scouts, checking private vaults and offline inventories." },
        { title: "Authentication & Assessment", desc: "Once located, we coordinate physical inspections, signature verifications, and detailed condition reporting with photographs." },
        { title: "Secure Acquisition", desc: "We manage purchasing, import customs paperwork, archival packaging, insurance, and tracked white-glove delivery directly to you." }
      ],
      benefits: [
        { icon: "fas fa-shield-halved", title: "Guaranteed Authenticity", desc: "Every sourced item is accompanied by a formal Certificate of Authenticity and comprehensive physical condition report." },
        { icon: "fas fa-globe-americas", title: "International Reach", desc: "Our connections span Tokyo, London, Paris, and Boston, giving us reach into the world's premier book hubs." },
        { icon: "fas fa-feather-pointed", title: "Custom Bindings", desc: "Choose to have your acquisition bound in bespoke marbled endpapers and fine calfskin leather by certified craftsmen." },
        { icon: "fas fa-vault", title: "Private Archival Storage", desc: "Option to store your acquisitions in our climate-controlled vault prior to personal collection or display." }
      ],
      gallery: [
        "./rare_books_showcase.png",
        "./book_pile_hero.png",
        "./about_hero.png"
      ],
      faqs: [
        { question: "How long does a typical search take?", answer: "Search times vary depending on rarity. A common out-of-print edition might take 2-3 weeks, while a specific signed first-state printing of a classic novel could take several months of scouting." },
        { question: "Is there an upfront fee for sourcing?", answer: "We require a small, fully refundable deposit to initiate highly specialized searches. Our main fee is a percentage commission calculated on the final purchase price of the book." },
        { question: "Do you supply documentation of authenticity?", answer: "Absolutely. Every transaction is accompanied by a signed Certificate of Authenticity, auction records where applicable, and a formal appraisal for insurance purposes." }
      ],
      footerCtaTitle: "Acquire Your Dream Edition",
      footerCtaDesc: "Initiate a dedicated antiquarian search with our global scouts to locate and secure that elusive masterpiece for your shelves.",
      footerCtaBtnText: "Inquire with a Specialist"
    },
    "book-clubs": {
      title: "Book Club Programs",
      subtitle: "Join one of our monthly reading circles or let our experts help you organize and curate your private club.",
      badge: "✦ Literary Community",
      ctaText: "Join a Book Club",
      ctaLink: "./contact.html?service=book-clubs",
      heroImg: "./service_club.png",
      overviewImg: "./book_club_community.png",
      overviewTag: "COMMUNITY READING",
      overviewTitle: "Foster Meaningful Conversations",
      desc1: "Reading is a solitary act that blossoms when shared. Our Book Club Programs are designed to bridge the gap between individual readers, establishing vibrant networks of literary dialogue. Whether you join one of our in-house, curator-led monthly salons or commission us to support your private book club, we bring structure and quality to your discussions.",
      desc2: "For private clubs, we handle the logistics: we select matching titles based on your group's profile, supply custom discussion guides filled with critical analysis, and can even provide a professional guest facilitator. Members also receive priority print reservation and discounts on monthly titles.",
      bullets: [
        { title: "Curator-Led Moderation", desc: "Expert facilitators who guide discussions, highlight subtext, and share historical context." },
        { title: "Custom Guidebooks", desc: "Artfully designed digital and physical booklets containing background essays, discussion questions, and recipes." },
        { title: "Priority Book Sourcing", desc: "Guaranteed availability of selected editions for all members, including bulk shipping options." }
      ],
      timeline: [
        { title: "Select Your Circle", desc: "Choose an existing group (e.g. Modern Fiction, Historical Biography) or sit down with us to design a custom group." },
        { title: "Receive the Selection", desc: "Members receive their custom-printed books, reading timelines, and background reading kits at the start of the month." },
        { title: "Salon Discussion Meeting", desc: "Gather in our private salon lounge or online for a 2-hour guided discussion with curated coffee, wine, and pastries." },
        { title: "Author Integrations", desc: "For select cycles, participate in exclusive Q&A sessions with the book's author or a visiting academic specialist." }
      ],
      benefits: [
        { icon: "fas fa-users-viewfinder", title: "Diverse Formats", desc: "Available for both fiction and non-fiction paths, catering to casual readers and academic minds alike." },
        { icon: "fas fa-file-pdf", title: "Premium Guides", desc: "Every member gets a gorgeous study workbook containing structural analyses, timelines, and author profiles." },
        { icon: "fas fa-glass-water", title: "Private Salon Access", desc: "Host your club in our ambient bookstore lounge with complimentary refreshments and ambient music." },
        { icon: "fas fa-percentage", title: "Bulk Book Discounts", desc: "Receive 15% off when ordering 5 or more copies of the monthly selection for your private club members." }
      ],
      gallery: [
        "./book_club_community.png",
        "./cozy_bookstore_hero.png",
        "./about_hero.png"
      ],
      faqs: [
        { question: "How large are the discussion circles?", answer: "To ensure that every voice is heard and conversations stay focused, we cap our salon groups at 12 active members per session." },
        { question: "Can we hire a curator to host a private family event?", answer: "Certainly! We offer private booking packages where one of our expert curators will prepare materials and facilitate your personal gathering." },
        { question: "What happens if I miss a monthly meeting?", answer: "If you cannot attend, we will send you a detailed written summary of the discussion highlights and the video recording if it's hosted virtually." }
      ],
      footerCtaTitle: "Join the Literary Conversation",
      footerCtaDesc: "Become a member of our in-house reading salons or start a private, professionally-supported club with your colleagues today.",
      footerCtaBtnText: "Join a Book Club"
    },
    "author-events": {
      title: "Author Events Management",
      subtitle: "We plan, coordinate, and host literary readings, writer panels, and book launch parties in our event rooms.",
      badge: "✦ Event Planning",
      ctaText: "Book Event Space",
      ctaLink: "./contact.html?service=author-events",
      heroImg: "./service_author.png",
      overviewImg: "./cozy_bookstore_hero.png",
      overviewTag: "LITERARY GATHERINGS",
      overviewTitle: "Bring Stories to Life",
      desc1: "A book launch or author reading is a rare moment where the creator and the community connect. The Shelf offers comprehensive Author Events Management for publishers, independent writers, and literary organizations. We transform our bookstore spaces into bespoke stages, matching the mood of your writing with the correct lighting, sound, and decorations.",
      desc2: "From hosting intimate poetry readings for 20 guests to organizing panel discussions and book-signing queues for 150 attendees, we handle everything. Our services include marketing outreach, ticketing systems, digital streaming, and on-site book sales, allowing creators to focus entirely on their audience.",
      bullets: [
        { title: "Full Logistics Coverage", desc: "Sound design, ambient lighting setup, catering, crowd management, and book-signing queues." },
        { title: "Marketing & Ticketing", desc: "Email list promotion, social media flyers, ticket management, and local press outreach." },
        { title: "Hybrid Streaming", desc: "Multi-camera high-definition broadcasting for remote viewers, with high-quality recorded archives." }
      ],
      timeline: [
        { title: "Initial Concept & Date", desc: "Align on event objectives, format (panel, Q&A, reading), guest capacity, date, and budget details." },
        { title: "Promotion Launch", desc: "Open ticket registries, deploy marketing campaigns across our channels, and coordinate with publishers." },
        { title: "Production Setup", desc: "Conduct soundchecks, stage arrangement, book stock checks, and prepare catering before doors open." },
        { title: "Event Execution", desc: "Run the presentation, manage microphone Q&A, coordinate signing lines, and process post-event recording edits." }
      ],
      benefits: [
        { icon: "fas fa-microphone-lines", title: "Premium Sound", desc: "Equipped with professional Sennheiser wireless microphones and Bose surround sound systems." },
        { icon: "fas fa-video", title: "Multi-Cam Video", desc: "Capture every angle with 4K cameras and stream seamlessly to YouTube, Zoom, or private platforms." },
        { icon: "fas fa-wine-glass-empty", title: "Catering Options", desc: "Partner with local culinary leaders to provide curated wine, artisanal cheeses, and fine pastries." },
        { icon: "fas fa-users-line", title: "Established Audience", desc: "Tap into The Shelf's list of thousands of active book buyers and literary enthusiasts in the area." }
      ],
      gallery: [
        "./cozy_bookstore_hero.png",
        "./book_club_community.png",
        "./about_hero.png"
      ],
      faqs: [
        { question: "Do you host self-published or indie authors?", answer: "Yes, we do! We believe in supporting all talented voices. We review indie submissions monthly and offer custom packages for independent book launches." },
        { question: "What is your maximum seating capacity?", answer: "Our main salon can comfortably seat up to 80 guests for readings, or accommodate up to 150 standing guests for cocktail-style launch events." },
        { question: "Are books sold at the event cataloged with you?", answer: "We set up dedicated sales counters during the event. We process all transactions and can coordinate consignment agreements for future sales." }
      ],
      footerCtaTitle: "Plan Your Literary Event",
      footerCtaDesc: "Speak with our events coordinator to reserve a date, design your stage, and launch your book to an engaged community.",
      footerCtaBtnText: "Inquire About Event Dates"
    },
    "library-curation": {
      title: "Library Curation Services",
      subtitle: "Bespoke layout design, sourcing, and cataloging services for home libraries, corporate studies, and hospitality settings.",
      badge: "✦ Space Design",
      ctaText: "Consult Our Curator",
      ctaLink: "./contact.html?service=library-curation",
      heroImg: "./service_library.png",
      overviewImg: "./rare_books_showcase.png",
      overviewTag: "BESPOKE SPACES",
      overviewTitle: "Architect Your Intellectual Sanctuary",
      desc1: "A home library is more than a storage room—it is an intellectual sanctuary, a reflection of your personality, and a legacy to pass down. Our Library Curation Services provide homeowners, interior designers, corporate executives, and luxury hotels with professional curation that matches physical aesthetics with deep literary substance.",
      desc2: "We don't just buy books in bulk by color or height. We consult with you to map out your fields of interest, coordinate shelf aesthetics, source beautiful matching editions, and implement a logical cataloging system. From leather-bound classics to modern architectural monographs, we make sure every shelf tells a coherent story.",
      bullets: [
        { title: "Aesthetic Sourcing", desc: "Selecting editions that harmonize with your interior design, woodwork, and color schemes." },
        { title: "Custom Classification", desc: "Cataloging and index systems using standard or custom classification structures, complete with library labels." },
        { title: "Lifecycle Management", desc: "Ongoing maintenance, acquisition of new volumes, and catalog updates on a regular basis." }
      ],
      timeline: [
        { title: "Site Assessment", desc: "Evaluate physical shelving dimensions, ambient lighting, room layout, and discuss your reading habits and goals." },
        { title: "Curation Proposal", desc: "Deliver a detailed catalog outline, budget proposals, sample binding materials, and shelf rendering drafts." },
        { title: "Acquisition & Cataloging", desc: "Locate, purchase, inspect, and label the selected works, and create a digital inventory index file." },
        { title: "Physical Installation", desc: "Arrange books on-site, applying principles of shelf styling, weight distribution, and accessibility layout." }
      ],
      benefits: [
        { icon: "fas fa-compass-drafting", title: "Design Partnership", desc: "We work hand-in-hand with your interior designers and architects to ensure shelving and books fit perfectly." },
        { icon: "fas fa-database", title: "Digital Inventory", desc: "Receive a searchable digital catalog database of your entire collection, accessible from your phone." },
        { icon: "fas fa-scroll", title: "Custom Bookplates", desc: "Design and print custom foil-stamped bookplates bearing your family crest or name for every volume." },
        { icon: "fas fa-star-of-life", title: "Corporate Studies", desc: "Specialized curations for professional boardrooms, lounge spaces, hotels, and club memberships." }
      ],
      gallery: [
        "./rare_books_showcase.png",
        "./book_pile_hero.png",
        "./cozy_bookstore_hero.png"
      ],
      faqs: [
        { question: "Do you build the physical bookshelves?", answer: "No, we do not perform carpentry or structural work ourselves. However, we coordinate directly with your cabinetmakers and supply exact spatial dimensions." },
        { question: "Can you help sort my existing book pile?", answer: "Absolutely. We can catalog, filter, and organize your existing books, advising on which titles to keep, donate, re-bind, or store." },
        { question: "How do you calculate pricing for curations?", answer: "Curation fees are based on a fixed design and project management fee, plus the direct cost of the sourced books and bindings." }
      ],
      footerCtaTitle: "Design Your Dream Library",
      footerCtaDesc: "Schedule an on-site consultation with our library design team to begin outlining your personal intellectual sanctuary.",
      footerCtaBtnText: "Consult Our Curator"
    },
    "gift-bundles": {
      title: "Gift Collection & Custom Bundles",
      subtitle: "Artistically styled book boxes containing handpicked titles, custom journals, bookmarks, and stationery.",
      badge: "✦ Artful Gifting",
      ctaText: "Build Custom Bundle",
      ctaLink: "./contact.html?service=gift-bundles",
      heroImg: "./service_gift.png",
      overviewImg: "./book_pile_hero.png",
      overviewTag: "CURATED GIFTING",
      overviewTitle: "Give the Gift of Literature",
      desc1: "Giving a book is a token of intellect, affection, and understanding, but choosing the right one can be challenging. Our Gift Collection & Custom Bundles take the guesswork out of gifting. We compile bespoke book boxes that combine hand-selected novels or monographs with high-quality reading accessories, creating a premium unwrapping experience.",
      desc2: "Each bundle is built around a custom theme (e.g. 'The Cozy Essayist', 'The Adventurous Thinker', or 'Centuries of Verse') or customized for a recipient's specific profile. We include luxury items like heavy brass bookmarks, artisanal stationery, custom-roasted coffee, and handmade journals, all wrapped in wax-sealed linen paper.",
      bullets: [
        { title: "Wax-Sealed Wrapping", desc: "Every box is wrapped in fine parchment paper, tied with hemp string, and stamped with our custom wax seal." },
        { title: "Bespoke Calligraphy", desc: "A personalized gift card hand-written in calligraphy ink by our in-house artist." },
        { title: "Custom Add-ons", desc: "Incorporate specialized reading lights, teas, bookmarks, and leather notebook covers." }
      ],
      timeline: [
        { title: "Specify the Theme", desc: "Select a pre-designed thematic bundle or specify details about your recipient's interests and reading level." },
        { title: "Curation Draft", desc: "Our curators select 1-3 books and complementary items, sending you a brief photo draft for approval." },
        { title: "Artful Packaging", desc: "We hand-wrap the selection in premium linen, insert the calligraphy gift note, and apply the wax seal." },
        { title: "Tracked Shipping", desc: "The bundle is dispatched in an shipping carton with tracked courier services to guarantee a pristine delivery." }
      ],
      benefits: [
        { icon: "fas fa-pen-nib", title: "Hand-written Notes", desc: "No generic computer-printed cards. Every gift note is written by hand in high-quality calligraphy script." },
        { icon: "fas fa-certificate", title: "Curated Accessories", desc: "We partner with top stationery brands to supply heavy brass bookmarks, linen notebooks, and leather cases." },
        { icon: "fas fa-mug-saucer", title: "Artisan Additions", desc: "Upgrade boxes with custom organic teas, hand-poured candles, or custom-roasted coffee bags." },
        { icon: "fas fa-truck-fast", title: "Direct Shipping", desc: "Send gifts directly to recipients with secure, padded shipping boxes that keep the interior pristine." }
      ],
      gallery: [
        "./book_pile_hero.png",
        "./cozy_bookstore_hero.png",
        "./about_hero.png"
      ],
      faqs: [
        { question: "Can I customize the items inside a bundle?", answer: "Yes, definitely! You can choose the books, accessories, and notes. Our curator will review it to make sure the presentation remains gorgeous." },
        { question: "Do you offer corporate or bulk bundles?", answer: "Yes, we design bulk packages for corporate events, holidays, and membership gifts, complete with custom branding options." },
        { question: "What if the recipient has already read the book?", answer: "We include an elegant gift exchange card in every box, allowing them to exchange the book for another curator recommendation easily." }
      ],
      footerCtaTitle: "Create a Memorable Gift",
      footerCtaDesc: "Design a personalized literary gift box or select one of our curated bundles to surprise a reader today.",
      footerCtaBtnText: "Build Custom Bundle"
    }
  };


  const params = new URLSearchParams(window.location.search);
  let serviceId = params.get('id') || 'reading-consultation';
  serviceId = serviceId.toLowerCase();


  if (!services[serviceId]) {
    serviceId = 'reading-consultation';
  }

  const data = services[serviceId];


  const injectContent = () => {

    document.title = `${data.title} | The Shelf — Curated Reads`;


    const badgeEl = document.getElementById('details-badge');
    if (badgeEl) badgeEl.innerHTML = data.badge;

    const titleEl = document.getElementById('details-title');
    if (titleEl) titleEl.textContent = data.title;

    const subtitleEl = document.getElementById('details-subtitle');
    if (subtitleEl) subtitleEl.textContent = data.subtitle;

    const ctaTextEl = document.getElementById('details-cta-text');
    if (ctaTextEl) ctaTextEl.textContent = data.ctaText;

    const ctaLinkEl = document.getElementById('details-cta-link');
    if (ctaLinkEl) ctaLinkEl.setAttribute('href', data.ctaLink);

    const heroImgEl = document.getElementById('details-hero-img');
    if (heroImgEl) {
      heroImgEl.setAttribute('src', data.heroImg);
      heroImgEl.setAttribute('alt', `Main demonstration photo for ${data.title}`);
    }


    const overviewImgEl = document.getElementById('details-overview-img');
    if (overviewImgEl) {
      overviewImgEl.setAttribute('src', data.overviewImg);
      overviewImgEl.setAttribute('alt', `Detailed layout photo for ${data.title}`);
    }

    const overviewTagEl = document.getElementById('details-overview-tag');
    if (overviewTagEl) overviewTagEl.textContent = data.overviewTag;

    const overviewTitleEl = document.getElementById('details-overview-title');
    if (overviewTitleEl) overviewTitleEl.textContent = `How We Facilitate ${data.title}`;

    const desc1El = document.getElementById('details-overview-desc-1');
    if (desc1El) desc1El.textContent = data.desc1;

    const desc2El = document.getElementById('details-overview-desc-2');
    if (desc2El) desc2El.textContent = data.desc2;

    const bulletsContainer = document.getElementById('details-overview-bullets');
    if (bulletsContainer) {
      bulletsContainer.innerHTML = '';
      data.bullets.forEach(bullet => {
        const bulletHTML = `
          <div class="feature-item">
            <div class="feature-bullet"><i class="fas fa-circle-check"></i></div>
            <div>
              <h4>${bullet.title}</h4>
              <p>${bullet.desc}</p>
            </div>
          </div>
        `;
        bulletsContainer.insertAdjacentHTML('beforeend', bulletHTML);
      });
    }


    const timelineContainer = document.getElementById('details-timeline');
    if (timelineContainer) {
      timelineContainer.innerHTML = '<div class="timeline-line"></div>';
      data.timeline.forEach((step, index) => {
        const isLeft = index % 2 === 0;
        const itemClass = isLeft ? 'timeline-item left-item' : 'timeline-item right-item';
        const stepNo = String(index + 1).padStart(2, '0');

        const stepHTML = `
          <div class="${itemClass} fade-in-on-scroll">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-step-no">${stepNo}</div>
              <h3 class="timeline-title">${step.title}</h3>
              <p>${step.desc}</p>
            </div>
          </div>
        `;
        timelineContainer.insertAdjacentHTML('beforeend', stepHTML);
      });
    }


    const benefitsContainer = document.getElementById('details-benefits-cards');
    if (benefitsContainer) {
      benefitsContainer.innerHTML = '';
      data.benefits.forEach(benefit => {
        const cardHTML = `
          <div class="why-card fade-in-on-scroll">
            <div class="why-icon"><i class="${benefit.icon}"></i></div>
            <h3 class="why-title">${benefit.title}</h3>
            <p class="why-desc">${benefit.desc}</p>
          </div>
        `;
        benefitsContainer.insertAdjacentHTML('beforeend', cardHTML);
      });
    }


    const galleryContainer = document.getElementById('details-gallery');
    if (galleryContainer) {
      galleryContainer.innerHTML = '';
      data.gallery.forEach((imgSrc, index) => {
        const itemHTML = `
          <div class="gallery-item-detail fade-in-on-scroll">
            <img src="${imgSrc}" alt="Gallery highlight ${index + 1} for ${data.title}">
          </div>
        `;
        galleryContainer.insertAdjacentHTML('beforeend', itemHTML);
      });
    }


    const faqContainer = document.getElementById('details-faq');
    if (faqContainer) {
      faqContainer.innerHTML = '';
      data.faqs.forEach((faq, index) => {
        const itemHTML = `
          <div class="faq-item fade-in-on-scroll">
            <button class="faq-trigger" aria-expanded="false" id="faq-trigger-${index}">
              <span class="faq-question">${faq.question}</span>
              <span class="faq-icon"></span>
            </button>
            <div class="faq-content">
              <div class="faq-answer">
                <p>${faq.answer}</p>
              </div>
            </div>
          </div>
        `;
        faqContainer.insertAdjacentHTML('beforeend', itemHTML);
      });
    }


    const footerCtaTitleEl = document.getElementById('details-footer-cta-title');
    if (footerCtaTitleEl) footerCtaTitleEl.textContent = data.footerCtaTitle;

    const footerCtaDescEl = document.getElementById('details-footer-cta-desc');
    if (footerCtaDescEl) footerCtaDescEl.textContent = data.footerCtaDesc;

    const footerCtaBtnEl = document.getElementById('details-footer-cta-btn');
    if (footerCtaBtnEl) {
      footerCtaBtnEl.setAttribute('href', data.ctaLink);
      const textSpan = footerCtaBtnEl.querySelector('.btn-text');
      if (textSpan) {
        textSpan.textContent = data.footerCtaBtnText;
      } else {
        footerCtaBtnEl.textContent = data.footerCtaBtnText;
      }
    }
  };

  injectContent();
  window.dispatchEvent(new Event('scroll'));


  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      faqTriggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          otherTrigger.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
