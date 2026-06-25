document.addEventListener('DOMContentLoaded', () => {

  // ─── LITERARY BLOGS DATA DICTIONARY ───────────────────────────
  const blogs = {
    "book-recommendations": {
      title: "Top Curated Books to Read This Season",
      badge: "✦ Curation",
      category: "Book Recommendations",
      date: "June 24, 2026",
      readTime: "8 Min Read",
      author: "Marcus Vance, Head Curator",
      heroImg: "./blog_card_rec.png",
      gallery: ["./rare_books_showcase.png", "./book_pile_hero.png", "./cozy_bookstore_hero.png"],
      takeaways: [
        { no: "01", title: "Diversify Text Selection", desc: "Balance contemporary novels with vintage monographs to expand your cultural vocabulary." },
        { no: "02", title: "Consult Independent Curators", desc: "Avoid commercial bestseller loops by seeking out independent bookstore lists." },
        { no: "03", title: "Practice Active Notes", desc: "Write margin notes and summaries to retain key themes and insights from seasonal reads." }
      ],
      related: ["reading-habits", "classic-literature", "bookstore-stories"],
      content: `
        <p class="highlight-box">
          <strong>Editor's Note:</strong> Seasonal changes present the perfect psychological opportunity to reset our reading lists. As we shift from spring to summer, our intellectual needs evolve. Our team of book experts has compiled an in-depth reading list across contemporary fiction, historical analysis, and philosophy, designed to expand your horizons.
        </p>

        <h2>The Need for Curated Literature</h2>
        <p>In today's digital climate, algorithms govern what we read. Bestseller charts on massive online platforms are often driven by paid promotions or viral trends rather than substance. This results in a homogenization of reader taste—millions of people reading the exact same titles simultaneously. At The Shelf, we advocate for active, curated choices. Curated literature acts as a filter, separating works of lasting value from transient distractions.</p>
        
        <p>A curated book is one selected for its prose quality, depth of message, and cultural relevance. When you read a book recommended by a human curator, you are engaging in a centuries-old dialogue. Curators examine minor presses, translated texts, and out-of-print titles, ensuring a diverse and intellectually stimulating reading routine.</p>

        <blockquote>
          "A truly great bookstore does not simply sell books; it creates a custom map of human knowledge, guiding the reader toward questions they did not know they had."
          <cite>Marcus Vance, Head Curator</cite>
        </blockquote>

        <h2>The Season's Fiction Highlights</h2>
        <p>This season, fiction has taken an introspective turn, exploring the boundaries of memory, language, and geography. Our first recommendation is a newly translated work of magic realism from South America, exploring the generational echoes of a small Andean town. The prose is lush, demanding a slow reading pace that lets every paragraph settle. Here are three core fiction picks we recommend adding to your shelf:</p>

        <ul>
          <li><strong>The Memory of Water</strong> by Clara Silva: A lyrical narrative exploring heritage and environmental changes in coastal Uruguay.</li>
          <li><strong>Echoes on the Wind</strong> by Julian Thorne: A structural masterpiece detailing the life of a clockmaker in 19th-century Edinburgh, written in archaic Scots dialec.</li>
          <li><strong>Silences of the Library</strong> by Emily Harel: A meta-fictional mystery set in a forgotten archive in Alexandria, weaving history with philosophical puzzles.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./rare_books_showcase.png" alt="Echoes on the Wind cover book" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">Echoes on the Wind</h4>
            <span class="book-rec-author">Julian Thorne (Historical Fiction)</span>
            <p class="book-rec-desc">A deep, historical narrative tracking temporal philosophies. Thorne's use of rhythmic prose captures the ticking of old grandfather clocks, creating a highly immersive historical reading experience.</p>
          </div>
        </div>

        <h2>Introspective Non-Fiction Picks</h2>
        <p>For readers looking to engage with reality, non-fiction this season explores the concepts of attention preservation, local economics, and bibliographical history. With digital fatigue rising, books that examine our relationship with time and focus have become crucial tools for modern lifestyle design.</p>
        
        <p>We highly recommend *Preserving the Screenless Mind* by Dr. Alan Chen. This book combines neuroscience with sociological analysis to argue that the physical act of turning pages on a book activates deep-focus pathways that screens disrupt. Chen suggests a practical 'analog hour' daily to restore cognitive focus. Other notable non-fiction includes:</p>

        <ol>
          <li><strong>The Book Scout's Log</strong> by Arthur Pendelton: An entertaining memoir of a rare book finder travelling across post-war Europe.</li>
          <li><strong>Lost Traditions of Typography</strong> by Beatrice Warde: A visual essay on the history of fonts and book bindings.</li>
          <li><strong>Urban Sanctuaries</strong> by Sophia Lin: A study of how public parks, botanical gardens, and independent bookstores function as third places in modern cities.</li>
        </ol>

        <h2>The Cozy Ritual of Reading</h2>
        <p>Curating a reading list is only half the journey; establishing a reading ritual completes it. Set aside 30 minutes every evening. Pour a cup of black tea, dim the main lights, turn on a warm reading lamp, and sit in a comfortable armchair away from screens. As you read, write down questions in the margins of your book. Active engagement turns passive consumption into a creative act of interpretation.</p>
      `
    },
    "reading-habits": {
      title: "How to Build a Lifelong Reading Routine",
      badge: "✦ Habits",
      category: "Reading Habits",
      date: "June 20, 2026",
      readTime: "7 Min Read",
      author: "Elena Rostova, Literacy Director",
      heroImg: "./book_pile_hero.png",
      gallery: ["./blogs_hero.png", "./rare_books_showcase.png", "./cozy_bookstore_hero.png"],
      takeaways: [
        { no: "01", title: "Fix a Daily Time Slot", desc: "Commit to reading just 15-20 pages daily at the same time to form an automatic routine." },
        { no: "02", title: "Build a Screen-Free Nook", desc: "Design a physical space dedicated only to print reading to eliminate digital notifications." },
        { no: "03", title: "Follow the 50-Page Rule", desc: "Permit yourself to drop a book if it fails to engage you by page 50. Keep reading fun." }
      ],
      related: ["book-recommendations", "classic-literature", "literary-discoveries"],
      content: `
        <p class="highlight-box">
          <strong>Executive Summary:</strong> Developing a consistent reading habit is not about having spare time; it is about intentional environmental design and cognitive habit-stacking. This essay details how to restructure your day to make reading a effortless, lifelong ritual.
        </p>

        <h2>The Paradox of Time in Modern Life</h2>
        <p>We often hear the phrase, "I would love to read, but I simply don't have the time." Yet, screen-time statistics reveal that the average adult spends upwards of three to four hours a day on mobile devices, scrolling through social feeds or checking notifications. The issue is not a deficit of time, but the friction involved in choosing a book over a hyper-stimulating digital screen. Books require focused cognitive effort, while screens offer passive dopamine loops.</p>
        
        <p>To overcome this, we must apply the principles of behavioral psychology to our reading lives. By reducing the friction of starting a book and increasing the friction of accessing digital devices, we can naturally redirect our attention toward literature.</p>

        <blockquote>
          "Do not seek time to read. Create a environment where reading is the most natural, attractive, and comfortable choice available to you."
          <cite>Elena Rostova, Literacy Director</cite>
        </blockquote>

        <h2>Environmental Design: Creating a Sanctuary</h2>
        <p>Your environment dictates your behavior. If your reading chair is positioned directly in front of a television, or if your phone rests on your bedside table, your brain will automatically choose the path of least resistance. Creating a physical reading sanctuary is the first step in habit formation.</p>
        
        <p>A reading sanctuary does not need to be a large room. It can be a comfortable corner of a bedroom or living room. The key is that it must contain zero digital triggers. Position a comfortable armchair, place a small table next to it for tea or coffee, and install a warm reading lamp. Keep a stack of three to four books on the table. By keeping books visually present, you prompt your brain to select them when you sit down.</p>

        <ul>
          <li><strong>Visual Prompts:</strong> Place books where you usually sit—on the kitchen table, the couch, or next to your keys.</li>
          <li><strong>Notification Block:</strong> Leave your phone in another room or inside a drawer during your dedicated reading hour.</li>
          <li><strong>Sensory Association:</strong> Combine reading with a sensory pleasure, such as a cup of herbal tea or soft instrumental music.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./book_pile_hero.png" alt="Book pile on desk representing reading habits" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">Atomic Reading Habits</h4>
            <span class="book-rec-author">Elena Rostova (Self-Development)</span>
            <p class="book-rec-desc">A guide detailing how micro-habits, such as reading just ten pages a day, compile into reading dozens of books every year.</p>
          </div>
        </div>

        <h2>Habit Stacking &amp; Micro-Goals</h2>
        <p>One of the most effective ways to build a new habit is "habit stacking"—anchoring your new routine to an existing daily behavior. For example, "After I pour my morning coffee, I will read five pages of my book." Or, "When I lie down in bed, I will read ten pages before turning off the light."</p>
        
        <p>By keeping goals incredibly small, you eliminate the mental resistance to starting. Reading five pages seems trivial, but once you begin, the momentum often carries you to read fifteen or twenty. Even if you only read five pages a day, you will complete seven books a year. If you read twenty pages a day, you will complete thirty books a year.</p>

        <ol>
          <li><strong>Identify Anchors:</strong> Look at your daily habits (morning coffee, lunch breaks, train commutes, bedtimes) and stack reading onto them.</li>
          <li><strong>The 50-Page Rule:</strong> Life is too short to read books you dislike. If a book hasn't grabbed you by page 50, put it down and start another.</li>
          <li><strong>Read Broadly:</strong> Keep a mix of challenging non-fiction and light, engaging fiction on your stack to match your daily energy levels.</li>
        </ol>

        <h2>The Role of the Reading Journal</h2>
        <p>Tracking progress provides psychological satisfaction. Keep a physical, hand-bound notebook to log your reading journey. Write down the title, author, and date of completion. Note down quotes that struck you, ideas you want to explore, or reviews of the books. Writing by hand helps consolidate what you've read, transforming the book from a temporary experience into a permanent part of your intellectual library.</p>
      `
    },
    "independent-authors": {
      title: "The Rise of Independent Press and Self-Publishing",
      badge: "✦ Publishing",
      category: "Independent Authors",
      date: "June 15, 2026",
      readTime: "9 Min Read",
      author: "Julian Thorne, Editorial Director",
      heroImg: "./service_gift.png",
      gallery: ["./blog_featured.png", "./rare_books_showcase.png", "./cozy_bookstore_hero.png"],
      takeaways: [
        { no: "01", title: "Support Independent Presses", desc: "Small presses take financial risks on experimental prose and translated books that major houses reject." },
        { no: "02", title: "Appreciate Book Craftsmanship", desc: "Indie publishing often revives historic printing techniques, custom bindings, and cover textures." },
        { no: "03", title: "Find Original Voices", desc: "Independent authors operate outside commercial market constraints, producing highly original concepts." }
      ],
      related: ["book-recommendations", "bookstore-stories", "literary-discoveries"],
      content: `
        <p class="highlight-box">
          <strong>Industry Overview:</strong> The publishing landscape is undergoing a silent revolution. While international conglomerates focus on algorithmic blockbusters, small independent presses and self-published writers are reviving the art of typography, translations, and experimental literature.
        </p>

        <h2>The Homogenization of Major Publishing</h2>
        <p>Over the past two decades, the publishing industry has consolidated into a handful of massive conglomerates. These large corporate entities operate under strict financial constraints, looking to minimize risk and maximize profit. Consequently, acquisitions editors are pressured to find books that fit proven commercial formulas. This creates a repetitive market filled with derivative thrillers, celebrity memoirs, and viral pop-science titles.</p>
        
        <p>In contrast, independent publishers operate on a human scale. They are run by editors driven by a passion for literature rather than corporate profit metrics. Small presses like Fitzcarraldo Editions, New Directions, and Graywolf Press have become the true vanguards of modern literature, discovering Nobel laureates and championing experimental forms that major houses would reject as commercially unviable.</p>

        <blockquote>
          "Without the independent press, literature would lose its evolutionary edge. Small publishers are the scouts exploring new terrains of human language."
          <cite>Julian Thorne, Editorial Director</cite>
        </blockquote>

        <h2>The Craftsmanship of the Book as an Object</h2>
        <p>A book is not simply a vehicle for text—it is a physical object of art. Independent publishers have led the revival of beautiful book craftsmanship. While major publishers cut costs by using thin paper, glued bindings, and generic stock-photo covers, independent houses prioritize the tactile experience of reading.</p>
        
        <p>They select heavy cream paper, utilize sewn bindings that allow books to lay flat, and hire independent artists to create unique, hand-drawn typography for covers. Holding a well-crafted book creates a sensory connection that enriches the text, turning reading into a luxurious ritual. At The Shelf, we curate our shelves to highlight these exquisite small-press editions.</p>

        <ul>
          <li><strong>Tactile Quality:</strong> Heavy textured papers, sewn signatures, and debossed boards.</li>
          <li><strong>Typography:</strong> Custom typeface selection that matches the tone and historical context of the writing.</li>
          <li><strong>Limited Editions:</strong> Small print runs with numbered signatures and customized marbling.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./service_gift.png" alt="Linen book bundle representing independent press" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">The Independent Reader</h4>
            <span class="book-rec-author">Julian Thorne (Literary Criticism)</span>
            <p class="book-rec-desc">An exploration of the history of small press publishing, from Virginia Woolf's Hogarth Press to contemporary independent publishing collectives.</p>
          </div>
        </div>

        <h2>Sourcing Independent Gems</h2>
        <p>Sourcing books from independent authors and small presses requires active research. Since these titles do not have multimillion-dollar marketing budgets, they rarely appear on main transit station racks or television slots. Finding them requires visiting local bookstores, subscribing to small press newsletters, and reading literary magazines like *The Paris Review* or *The Times Literary Supplement*.</p>
        
        <p>When you buy an independent book, your purchase directly supports the creator and the publisher. It keeps the literary ecosystem healthy, ensuring that original, challenging, and beautiful voices continue to find print. Here is how you can support this movement:</p>

        <ol>
          <li><strong>Subscribe to Press Bundles:</strong> Many small presses offer annual subscriptions, shipping every new release directly to you.</li>
          <li><strong>Read Translated Fiction:</strong> Independent presses publish the vast majority of translated fiction, opening windows into different cultures.</li>
          <li><strong>Ask Your Bookseller:</strong> Bookstores curators have intimate knowledge of small-press catalogues and love matching readers with hidden gems.</li>
        </ol>

        <h2>The Future of Self-Publishing</h2>
        <p>Self-publishing has shed its historic stigma. Armed with professional editing platforms, custom print-on-demand technology, and direct-to-reader digital channels, self-published authors are producing work that equals major house quality. By bypassing traditional gatekeepers, these authors write directly for niche communities, delivering highly specialized and passionate works of fiction, history, and poetry.</p>
      `
    },
    "classic-literature": {
      title: "Why Classic Novels Still Matter Today",
      badge: "✦ Philosophy",
      category: "Classic Literature",
      date: "June 10, 2026",
      readTime: "10 Min Read",
      author: "Arthur Pendelton, Antiquarian Specialist",
      heroImg: "./rare_books_showcase.png",
      gallery: ["./blog_featured.png", "./book_pile_hero.png", "./cozy_bookstore_hero.png"],
      takeaways: [
        { no: "01", title: "Engage with Universal Questions", desc: "Classics explore timeless human issues—identity, ethics, grief, and love—across centuries." },
        { no: "02", title: "Resist Cultural Presentism", desc: "Reading historical works breaks us out of modern echo chambers, providing historical context." },
        { no: "03", title: "Appreciate Rhythmic Prose", desc: "Classical authors utilized complex sentence structures that expand our focus and comprehension." }
      ],
      related: ["book-recommendations", "reading-habits", "literary-discoveries"],
      content: `
        <p class="highlight-box">
          <strong>Introduction to the Classics:</strong> It is easy to view classic novels as outdated academic assignments. However, these works have survived centuries because they capture the fundamental dynamics of the human condition with unmatched depth. This essay explores why classical literature remains our most crucial mirror in the modern age.
        </p>

        <h2>Defining the Classical Canon</h2>
        <p>What makes a classic? It is not simply a book that is old. A classic is a text that possesses a continuous vitality—a book that, as Italo Calvino famously wrote, "has never finished saying what it has to say." Classics exist in a state of permanent relevance. Whether written in ancient Greece, 19th-century Russia, or mid-century Colombia, they address the same core human questions: What does it mean to live a good life? How do we navigate suffering? What is our responsibility to our community?</p>
        
        <p>When we read Jane Austen, Fyodor Dostoevsky, or Gabriel García Márquez, we realize that our contemporary anxieties are not new. The struggles of identity, relationships, social class, and mortality have been debated and detailed by the finest minds of history. Engaging with these works connects us to the broader human tapestry.</p>

        <blockquote>
          "To read a classic is to have a conversation with history. It breaks the illusion that our modern age is the only one that has struggled with truth."
          <cite>Arthur Pendelton, Antiquarian Specialist</cite>
        </blockquote>

        <h2>Resisting Presentism through History</h2>
        <p>We live in a state of cultural "presentism"—an obsession with the immediate present, the latest news cycle, and the current digital trend. This narrow focus limits our perspective, leading us to believe that our current challenges are unique and unprecedented. Reading classic novels provides historical context, showing us how past societies navigated crises of ethics, politics, and technology.</p>
        
        <p>For instance, reading Leo Tolstoy's *War and Peace* reveals how ordinary families navigated massive geopolitical conflicts, highlighting the resilience of human hope. Reading Mary Shelley's *Frankenstein* offers a profound critique of scientific hubris and technology isolation that feels incredibly modern as we discuss artificial intelligence today.</p>

        <ul>
          <li><strong>Geopolitical Context:</strong> Understanding how literature reflected the rise and fall of empires, industrialization, and philosophical revolutions.</li>
          <li><strong>Intellectual Empathy:</strong> Learning to understand the mindsets and values of people who lived in radically different social structures.</li>
          <li><strong>Philosophical Depth:</strong> Moving beyond simple plot-driven content to explore character ethics, subtext, and existential questions.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./rare_books_showcase.png" alt="Antique classic books on display" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">Why Read the Classics</h4>
            <span class="book-rec-author">Italo Calvino (Essays)</span>
            <p class="book-rec-desc">A collection of essays defining the magic of classic books and offering guides on how to approach them without academic fear.</p>
          </div>
        </div>

        <h2>The Cognitive Value of Complex Prose</h2>
        <p>Modern digital platforms train our minds to consume simple, short-form sentences. Over time, this shrinks our reading stamina and limits our vocabulary. Classic literature, particularly works from the 19th and early 20th centuries, utilizes complex sentence structures, subordination, and rich vocabulary. Reading these texts is cognitive weightlifting.</p>
        
        <p>It forces our brains to hold multiple clauses in memory, track long-term thematic arcs, and appreciate the musical rhythm of prose. Studies in cognitive science show that reading classic literature stimulates connectivity in the brain's language pathways, enhancing our overall focus, empathy, and writing abilities. Here is our recommended pathway for starting with the classics:</p>

        <ol>
          <li><strong>Start with Translations:</strong> Choose modern, award-winning translations of foreign classics (e.g., Pevear and Volokhonsky translations of Russian literature) for clean, readable prose.</li>
          <li><strong>Read with Annotation:</strong> Use annotated editions (like Penguin Classics or Oxford World's Classics) that explain historical references in footnotes.</li>
          <li><strong>Form a Reading Salon:</strong> Discussing a classic with a group helps break down complex themes and keeps you motivated to finish long works.</li>
        </ol>

        <h2>Preserving the Antiquarian Archive</h2>
        <p>As antiquarians, we don't just value the words in classic books; we value their physical lineage. Sourcing a first edition or a beautifully preserved historic printing connects us directly to the book's original moment of publication. Holding a book that was printed during Dostoevsky's lifetime, complete with vintage fonts and paper textures, brings a physical sense of time that digital text can never recreate. Classic books are artifacts of human history, and curating them is an act of preservation.</p>
      `
    },
    "bookstore-stories": {
      title: "Behind the Shelves: The Life of a Bookstore Curator",
      badge: "✦ Bookstore",
      category: "Bookstore Stories",
      date: "June 05, 2026",
      readTime: "7 Min Read",
      author: "Sylvia Beach, Bookstore Founder",
      heroImg: "./cozy_bookstore_hero.png",
      gallery: ["./blogs_hero.png", "./rare_books_showcase.png", "./service_library.png"],
      takeaways: [
        { no: "01", title: "Focus on Curation Over Volume", desc: "A great bookstore filters quality, selecting books that encourage conversation and intellectual growth." },
        { no: "02", title: "Build Community第三空间", desc: "Bookstores function as critical community spaces, offering places for slow dialogue and human connection." },
        { no: "03", title: "Preserve the Antiquarian Trade", desc: "Locating and cataloging rare books preserves historical knowledge and paper craftsmanship." }
      ],
      related: ["book-recommendations", "reading-habits", "independent-authors"],
      content: `
        <p class="highlight-box">
          <strong>Behind the Scenes:</strong> What does it take to run an independent bookstore in the digital age? It is not just about stacking shelves; it is a delicate dance of inventory curation, interior layout design, and fostering local literary culture.
        </p>

        <h2>The Philosophy of Curating Space</h2>
        <p>In a commercial economy dominated by online retail giants, the physical bookstore has had to redefine its purpose. Online retailers can offer millions of titles, overnight shipping, and low prices. A physical bookstore cannot compete on sheer volume or speed. Therefore, we must excel in what algorithms cannot do: create an immersive sensory environment and provide expert, personalized human curation.</p>
        
        <p>At The Shelf, we view our bookstore as a physical essay. The arrangement of our shelves is a narrative. We don't just dump books in alphabetical order; we curate displays that connect different genres, linking history with poetry, philosophy with fiction. We design our space with dark wood, warm lighting, and quiet reading corners, creating a sanctuary where visitors can escape digital noise and spend hours in silent contemplation.</p>

        <blockquote>
          "An independent bookstore is a neighborhood's intellectual living room. It is a space where you do not find what you were searching for, but what you needed."
          <cite>Sylvia Beach, Bookstore Founder</cite>
        </blockquote>

        <h2>The Daily Rituals of a Book Curator</h2>
        <p>The life of a book curator is highly detailed and active. It begins early in the morning, sorting through shipments from minor presses and antiquarian dealers. We inspect each book for paper quality, cover design, and overall condition. Shelving is an art. We arrange books to encourage serendipity—the accidental discovery of a book that changes your perspective.</p>
        
        <p>Throughout the day, we consult with customers, helping them map out their reading journeys or trace rare editions. We plan evening book clubs, host author panels, and coordinate with local bindery shops to restore old classics. It is a career that combines library science, trade history, event coordination, and interior styling.</p>

        <ul>
          <li><strong>Inventory Auditing:</strong> Inspecting incoming prints, checking catalogs, and vetting signature proofs.</li>
          <li><strong>Display Composition:</strong> Organizing tables to highlight specific authors, translated prose, and local indie releases.</li>
          <li><strong>Community Outreach:</strong> Designing study guides, writing reviews, and hosting reading groups in our private lounge.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./cozy_bookstore_hero.png" alt="Cozy bookstore wood shelves" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">The Bookstore Life</h4>
            <span class="book-rec-author">Sylvia Beach (Biography)</span>
            <p class="book-rec-desc">A collection of memoirs detailing the founding of Shakespeare and Company in Paris and the community of writers it nurtured.</p>
          </div>
        </div>

        <h2>Fostering the Third Place</h2>
        <p>Sociologists use the term "third place" to describe spaces outside of home (the first place) and work (the second place) where people gather to build community and engage in civil dialogue. Independent bookstores are one of the last remaining third places that do not require high spending. They are public forums where ideas are debated, art is shared, and connections are made.</p>
        
        <p>Our monthly book clubs, writer salons, and author panel readings serve as critical hubs of local culture. In a society struggling with screen isolation, physicalThird Places are essential anchors of community health. When you visit a local bookstore, you are not just purchasing a book; you are investing in the social fabric of your neighborhood.</p>

        <ol>
          <li><strong>Visit regularly:</strong> Spend time exploring the shelves, browsing recommendations, and chatting with booksellers.</li>
          <li><strong>Attend local events:</strong> Participate in poetry readings, book launch parties, and curator workshops.</li>
          <li><strong>Recommend to others:</strong> Help spread the word about your favorite independent bookstores and hidden-gem book releases.</li>
        </ol>

        <h2>The Scent of Old Paper</h2>
        <p>There is a unique chemistry to physical books. The scent of old paper—caused by the breakdown of organic compounds in wood pulp over time—triggers powerful nostalgic responses. Combined with the texture of heavy rag paper and the sound of a page turning, physical reading engages all our senses. It is a slow, tactile pleasure that digital text can never replace, and keeping this experience alive is the heart of our mission at The Shelf.</p>
      `
    },
    "literary-discoveries": {
      title: "Uncovering Lost Manuscripts & Antiquarian Secrets",
      badge: "✦ Archival",
      category: "Literary Discoveries",
      date: "May 28, 2026",
      readTime: "9 Min Read",
      author: "Arthur Pendelton, Antiquarian Specialist",
      heroImg: "./service_library.png",
      gallery: ["./rare_books_showcase.png", "./book_pile_hero.png", "./blogs_hero.png"],
      takeaways: [
        { no: "01", title: "Inspect Marginal Notes", desc: "Historical annotations and handwritten margins reveal critical clues about past owners and social contexts." },
        { no: "02", title: "Learn Collation Methods", desc: "Verify edition authenticity by checking signature markings, watermarks, and printing plate anomalies." },
        { no: "03", title: "Preserve Paper & Leather", desc: "Store rare editions in stable temperature, low-light environments to prevent fiber decay." }
      ],
      related: ["book-recommendations", "classic-literature", "independent-authors"],
      content: `
        <p class="highlight-box">
          <strong>Archival Report:</strong> Step behind the locked doors of the antiquarian study. This essay explores the meticulous methods used to authenticate rare prints, translate ancient margin notes, and preserve historical manuscripts for future libraries.
        </p>

        <h2>The Hunt for the Forgotten Page</h2>
        <p>For the bibliophile, the ultimate adventure lies in the hunt. Sourcing antiquarian books is a form of literary archaeology. It involves traveling to remote estate auctions, searching through dusty folders in old country houses, and parsing catalog entries from minor auction houses. Often, the most valuable discoveries are hidden in plain sight, miscataloged or bound inside common covers.</p>
        
        <p>Recently, our scouts located a rare 17th-century translation of classical philosophy in a small French village. The book had been rebound in plain cardboard covers in the 19th century, hiding its true value. Upon physical collation, we discovered it was a first-state printing, containing rare woodcut initials and unique hand-colored maps. Uncovering these items is a thrill that connects us directly to the history of printing.</p>

        <blockquote>
          "A rare book is a physical survivor of time. In its bindings, margins, and paper fibers, it carries the history of everyone who has ever read and protected it."
          <cite>Arthur Pendelton, Antiquarian Specialist</cite>
        </blockquote>

        <h2>The Art of Bibliographical Collation</h2>
        <p>Authentication requires rigid scientific discipline. We cannot rely on appearance alone. Rare book dealers utilize "collation"—the detailed physical analysis of a book's structure—to verify its authenticity. This includes counting the leaves, verifying the "signatures" (the letter markings printed at the bottom of pages to guide the binder), analyzing paper watermarks, and checking for missing plates.</p>
        
        <p>Watermarks are particularly crucial. By holding a leaf up to a light source, we can examine the translucent paper logo left by the wire mold. Historical watermark databases allow us to trace the paper back to the exact mill and year of manufacture, exposing modern counterfeits immediately. Signature checks also reveal whether sections of a book have been compiled from later editions.</p>

        <ul>
          <li><strong>Watermark Analysis:</strong> Examining wire logo impressions to identify historical paper mills and dates.</li>
          <li><strong>Signature Collation:</strong> Counting print sheets and checking gathering folds to ensure completeness.</li>
          <li><strong>Type Specimen Comparison:</strong> Matching type fonts and ink compositions with historical printing records.</li>
        </ul>

        <div class="book-recommendation-card">
          <img src="./service_library.png" alt="Antique books on shelf representing archival discovery" class="book-rec-img">
          <div class="book-rec-info">
            <h4 class="book-rec-title">Introduction to Bibliography</h4>
            <span class="book-rec-author">Philip Gaskell (Archival Guide)</span>
            <p class="book-rec-desc">The definitive textbook explaining the methods of printing, binding, and physical book collation from 1500 to the modern era.</p>
          </div>
        </div>

        <h2>Secrets Hidden in the Margins</h2>
        <p>Often, the most fascinating discoveries are not the printed text, but the handwritten notes left by historical readers in the margins—a study field known as "marginalia". Marginalia provides a direct link to the minds of past readers, showing us how they reacted to the text, what arguments they disputed, and what passages they highlighted.</p>
        
        <p>In one of our recently sourced volumes, a 1680 essay on political theory, the margins were filled with debates written in Latin by a contemporary reader. The notes argued against the author's views on monarchical authority, reflecting the political tensions of the Glorious Revolution. Translating and cataloging these notes turns the book into a unique historical document, showing us history in real-time.</p>

        <ol>
          <li><strong>Transcribe handwritten notes:</strong> Carefully read and translate marginal scribbles, using specialized paleography resources.</li>
          <li><strong>Cross-reference names:</strong> Check marginal signatures against municipal, university, and guild records to identify past owners.</li>
          <li><strong>Document annotations:</strong> Include detailed records of all annotations and highlights in the book's official catalog entry.</li>
        </ol>

        <h2>Preserving the Material Archive</h2>
        <p>Organic materials—paper, leather, glue, and thread—are highly sensitive to environmental factors. To prevent decay, rare editions must be stored in climate-controlled spaces with stable temperatures (around 18°C) and relative humidity (around 45%). High light exposure decomposes cellulose fibers and fades bindings, so we utilize custom-made archival folders and UV-filtering glass cases. Preserving these artifacts is our duty to the human record, keeping the material archive of our intellectual culture alive.</p>
      `
    }
  };

  // ─── ROUTER: QUERY PARAM EVALUATION ──────────────────────────
  const params = new URLSearchParams(window.location.search);
  let blogId = params.get('id') || 'book-recommendations';
  blogId = blogId.toLowerCase();

  // Fallback to default if matching blog is not found
  if (!blogs[blogId]) {
    blogId = 'book-recommendations';
  }

  const data = blogs[blogId];

  // ─── DOM INJECTION ────────────────────────────────────────────
  const injectContent = () => {
    // Page Title Update
    document.title = `${data.title} | The Shelf Journal`;

    // 1. Hero Elements
    const badgeEl = document.getElementById('details-badge');
    if (badgeEl) badgeEl.innerHTML = data.badge;

    const titleEl = document.getElementById('details-title');
    if (titleEl) titleEl.textContent = data.title;

    const authorEl = document.getElementById('details-author');
    if (authorEl) authorEl.innerHTML = `<i class="fas fa-user-pen"></i> ${data.author}`;

    const dateEl = document.getElementById('details-date');
    if (dateEl) dateEl.innerHTML = `<i class="far fa-calendar"></i> ${data.date}`;

    const readTimeEl = document.getElementById('details-read-time');
    if (readTimeEl) readTimeEl.innerHTML = `<i class="far fa-clock"></i> ${data.readTime}`;

    const heroImgEl = document.getElementById('details-hero-img');
    if (heroImgEl) {
      heroImgEl.setAttribute('src', data.heroImg);
      heroImgEl.setAttribute('alt', `Main cover photo for ${data.title}`);
    }

    // 2. Article Main Content
    const contentEl = document.getElementById('details-content');
    if (contentEl) {
      contentEl.innerHTML = data.content;
    }

    // 3. Gallery Elements
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

    // 4. Takeaways Elements
    const takeawaysContainer = document.getElementById('details-takeaways');
    if (takeawaysContainer) {
      takeawaysContainer.innerHTML = '';
      data.takeaways.forEach(takeaway => {
        const takeawayHTML = `
          <div class="takeaway-card fade-in-on-scroll">
            <div class="takeaway-no">${takeaway.no}</div>
            <h3 class="takeaway-title">${takeaway.title}</h3>
            <p class="takeaway-desc">${takeaway.desc}</p>
          </div>
        `;
        takeawaysContainer.insertAdjacentHTML('beforeend', takeawayHTML);
      });
    }

    // 5. Related Articles Elements
    const relatedContainer = document.getElementById('details-related');
    if (relatedContainer) {
      relatedContainer.innerHTML = '';
      data.related.forEach(relatedKey => {
        const relatedBlog = blogs[relatedKey];
        if (relatedBlog) {
          const cardHTML = `
            <article class="blog-card fade-in-on-scroll">
              <div class="blog-card-img-wrapper">
                <img src="${relatedBlog.heroImg}" alt="${relatedBlog.title}" class="blog-card-img">
                <span class="blog-card-category">${relatedBlog.category}</span>
              </div>
              <div class="blog-card-info">
                <div class="blog-card-meta">
                  <span class="blog-card-date"><i class="far fa-calendar"></i> ${relatedBlog.date}</span>
                </div>
                <h3 class="blog-card-title">${relatedBlog.title}</h3>
                <p class="blog-card-summary">Explore our curator's insights into this fascinating literary topic and check out recommended readings.</p>
                <a href="./blog-details.html?id=${relatedKey}" class="blog-card-cta">Read More ➔</a>
              </div>
            </article>
          `;
          relatedContainer.insertAdjacentHTML('beforeend', cardHTML);
        }
      });
    }
  };

  injectContent();

  // ─── INITIALIZE SYNCED THEME AND DIRECTION ──────────────────
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  const savedDir = localStorage.getItem('bookstore-dir') || 'ltr';

  // Apply theme on load
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-sun';
    });
  } else {
    document.body.classList.remove('light-mode');
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-moon';
    });
  }

  // Apply layout direction on load
  document.documentElement.setAttribute('dir', savedDir);
  document.documentElement.setAttribute('lang', savedDir === 'rtl' ? 'ar' : 'en');

  // ─── TOAST NOTIFICATION SYSTEM ────────────────────────────────
  const toast = document.getElementById('toast-notification');
  const toastMessage = toast ? toast.querySelector('.toast-message') : null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ─── SCROLL REVEAL SYSTEM ───────────────────────────────────
  const revealOnScroll = () => {
    const revealElements = document.querySelectorAll('.fade-in-on-scroll');
    const triggerBottom = (window.innerHeight / 10) * 8.8;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Trigger animations after injection
  setTimeout(revealOnScroll, 100);
  setTimeout(revealOnScroll, 400);

  // ─── NEWSLETTER FORM INTERCEPTOR ──────────────────────────────
  const newsletterFormFooter = document.getElementById('newsletter-form-main');
  if (newsletterFormFooter) {
    newsletterFormFooter.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterFormFooter.querySelector('input[type="email"]');
      const submitBtn = newsletterFormFooter.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="display:inline-block; vertical-align:middle;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg>
      `;
      
      setTimeout(() => {
        showToast('Successfully subscribed! Check your inbox for updates.');
        if (emailInput) emailInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }

  // ─── SCROLLED NAVBAR HEADER CLASS ─────────────────────────────
  const mainHeader = document.getElementById('main-header');
  const handleHeaderScroll = () => {
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ─── THEME TOGGLER FUNCTIONALITY ──────────────────────────────
  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
    });

    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  const themeBtnMobile = document.getElementById('themeBtnMobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', applyThemeToggle);

  // ─── RTL TOGGLER FUNCTIONALITY ────────────────────────────────
  function applyRtlToggle() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    
    document.documentElement.setAttribute('dir', newDir);
    document.documentElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem('bookstore-dir', newDir);
    
    showToast(newDir === 'rtl' ? 'تم تحويل اتجاه النص إلى اليمين (RTL).' : 'Text layout set to LTR (English).');
  }

  const rtlBtn = document.getElementById('rtlBtn');
  if (rtlBtn) rtlBtn.addEventListener('click', applyRtlToggle);

  const rtlBtnMobile = document.getElementById('rtlBtnMobile');
  if (rtlBtnMobile) rtlBtnMobile.addEventListener('click', applyRtlToggle);

  // ─── MOBILE DRAWER MENU TOGGLE ────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const parentLi = link.parentElement;
        if (parentLi.classList.contains('dropdown') && window.innerWidth <= 900) {
          return;
        }
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
});
