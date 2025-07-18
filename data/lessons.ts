    // data/lessons.ts
    export interface Lesson {
    slug: string
    title: string
    description: string
    background: string
    famousQuote: string
    philosopher: string
    keyLesson: string
    historicalContext: string
    practicalApplication: string
    modernRelevance: string
    reflection: string
    keyPrinciples: string[]
    }

    export const lessons: Lesson[] = [
    {
        slug: 'existence',
        title: 'Existence',
        description: 'Quotes that explore the meaning of life, reality, and being.',
        background: '/existence.jpg',
        famousQuote: 'Man is nothing else but what he makes of himself.',
        philosopher: 'Jean-Paul Sartre',
        keyLesson: 'Existence is not predetermined. We are thrown into this world without a predefined essence or purpose, and it is through our choices and actions that we create who we are. This radical freedom brings both tremendous responsibility and the anxiety of authentic living.',
        historicalContext: 'Existentialism emerged in the 20th century as a philosophical movement that emphasized individual existence, freedom, and choice. Jean-Paul Sartre, along with thinkers like Simone de Beauvoir and Albert Camus, developed this philosophy in response to the horrors of World War II and the perceived meaninglessness of modern life. The movement rejected traditional religious and philosophical systems that claimed to provide objective meaning, instead arguing that humans must create their own purpose through authentic choices and actions.',
        practicalApplication: 'Understanding existentialism means recognizing that you are the author of your own life story. When faced with difficult decisions, remember that there is no predetermined "right" path – only the path you choose to walk. This philosophy encourages taking full responsibility for your choices rather than blaming circumstances, other people, or fate. Practice authentic living by regularly examining your values and ensuring your actions align with your chosen identity rather than societal expectations.',
        modernRelevance: 'In our digital age of endless options and constant comparison, existentialism offers a powerful antidote to anxiety and indecision. Social media often presents curated versions of others\' lives, making us question our own choices and worth. Existentialist thinking reminds us that authenticity matters more than approval. The philosophy is particularly relevant for career decisions, relationship choices, and personal identity in a world where traditional structures provide less guidance than ever before.',
        reflection: 'Consider the times in your life when you felt most authentic and alive. What were you doing? What choices led you there? Existentialism suggests that these moments of authenticity are when we are most fully human. The anxiety you feel when making important decisions is not something to avoid – it is the weight of freedom itself. Embrace this anxiety as a sign that your choices matter and that you are actively creating yourself through your decisions.',
        keyPrinciples: [
        'Existence precedes essence – we exist first, then create our identity through choices',
        'Radical freedom – we are completely free to choose our path, which brings responsibility',
        'Authenticity – living according to your own values rather than external expectations',
        'Angst – the anxiety that comes from recognizing our complete freedom',
        'Bad faith – the tendency to deny our freedom and responsibility by pretending we have no choice',
        'Absurdity – the conflict between human desire for meaning and the universe\'s apparent meaninglessness'
        ]
    },
    {
        slug: 'freedom',
        title: 'Freedom',
        description: 'Quotes about liberty, breaking limits, and living on your own terms.',
        background: '/freedom.jpg',
        famousQuote: 'Freedom is the will to be responsible to ourselves.',
        philosopher: 'Friedrich Nietzsche',
        keyLesson: 'True freedom is not the absence of constraints, but the conscious choice to take responsibility for our actions and their consequences. It requires the courage to break free from societal expectations and create our own values, even when it means standing alone.',
        historicalContext: 'The concept of freedom has evolved dramatically throughout history. Ancient Greeks distinguished between political freedom (citizenship) and personal freedom (self-determination). The Enlightenment brought ideas of natural rights and individual liberty. Nietzsche\'s conception of freedom went beyond political or social freedom to psychological and spiritual liberation – the freedom to create one\'s own values and meaning. This idea influenced existentialists and continues to challenge conventional notions of freedom today.',
        practicalApplication: 'Practical freedom begins with recognizing the difference between external circumstances and internal responses. You may not control what happens to you, but you can control how you interpret and respond to events. Start by identifying areas where you give away your freedom – through people-pleasing, following others\' expectations, or avoiding difficult decisions. Practice making choices based on your values rather than fear or social pressure. Remember that true freedom often requires saying no to good things to say yes to great things.',
        modernRelevance: 'In our interconnected world, freedom faces new challenges. Digital technology can be liberating but also addictive and controlling. Social media creates new forms of conformity and comparison. Economic pressures can limit choices. Understanding freedom as internal liberation – the ability to think independently and act according to your values – becomes crucial. This inner freedom allows you to navigate external constraints while maintaining your authentic self.',
        reflection: 'True freedom is often uncomfortable because it requires taking responsibility for your life. When you blame others or circumstances for your problems, you give away your power but also your burden. What would change in your life if you fully accepted responsibility for your current situation? Where are you choosing security over freedom? The path to freedom often requires letting go of the need for others\' approval and the comfort of having someone else make decisions for you.',
        keyPrinciples: [
        'Freedom requires responsibility – you cannot have one without the other',
        'Internal freedom matters more than external circumstances',
        'True freedom often means choosing the difficult path',
        'Freedom includes the freedom to make mistakes and learn from them',
        'Authentic freedom comes from living according to your own values',
        'Freedom is not the absence of constraints but the choice of which constraints to accept'
        ]
    },
    {
        slug: 'discipline',
        title: 'Discipline',
        description: 'Quotes that reflect consistency, control, and self-mastery.',
        background: '/discipline.jpg',
        famousQuote: 'Discipline is the bridge between goals and accomplishment.',
        philosopher: 'Jim Rohn',
        keyLesson: 'Discipline is the foundation of all achievement. It is the daily practice of choosing long-term fulfillment over short-term pleasure. Through consistent small actions, we build the character and habits that ultimately determine our destiny.',
        historicalContext: 'Discipline has been valued across cultures and centuries. Ancient Spartans built their entire society around disciplined training. Buddhist monks practice discipline to achieve enlightenment. The Stoics viewed discipline as essential for wisdom and virtue. In modern times, research in psychology has validated ancient wisdom about discipline, showing how self-control and delayed gratification predict success across virtually every area of life.',
        practicalApplication: 'Discipline is not about harsh self-punishment but about consistent, purposeful action. Start small – choose one habit and commit to it daily for 30 days. Focus on systems rather than goals. Instead of "I want to lose weight," create a system: "I will walk for 20 minutes every morning." Build keystone habits that naturally lead to other positive behaviors. Track your progress to maintain motivation. Remember that discipline is like a muscle – it grows stronger with use.',
        modernRelevance: 'In our age of instant gratification and constant distraction, discipline becomes a superpower. The ability to focus deeply, delay gratification, and stick to long-term plans sets you apart in a world of scattered attention. Discipline is particularly crucial for digital wellness – managing screen time, social media use, and information consumption. It\'s also essential for financial health, physical fitness, and meaningful relationships, all of which require consistent effort over time.',
        reflection: 'Discipline often feels restrictive, but it actually creates freedom. When you have disciplined habits around health, finances, and productivity, you free up mental energy for creativity and spontaneity. Consider your current habits – which ones serve your long-term goals, and which ones hold you back? Discipline is not about perfection but about consistency. The compound effect of small, disciplined actions creates extraordinary results over time.',
        keyPrinciples: [
        'Discipline is choosing between what you want now and what you want most',
        'Small, consistent actions compound into extraordinary results',
        'Discipline creates freedom by eliminating chaos and inefficiency',
        'Habits are more powerful than motivation – discipline builds habits',
        'Self-discipline is self-love in action',
        'Discipline is the bridge between thought and accomplishment'
        ]
    },
    {
        slug: 'rebellion',
        title: 'Rebellion',
        description: 'Quotes that challenge norms, provoke thought, and ignite change.',
        background: '/rebellion.jpg',
        famousQuote: 'The most courageous act is still to think for yourself. Aloud.',
        philosopher: 'Coco Chanel',
        keyLesson: 'Rebellion is not mere destruction but the creative act of questioning established norms and daring to imagine alternatives. It requires the courage to stand against the crowd and speak truth to power, even when it comes at great personal cost.',
        historicalContext: 'Throughout history, rebellion has been the catalyst for human progress. From Socrates questioning Athenian society to Gandhi\'s non-violent resistance, from the American Revolution to the civil rights movement, rebels have challenged unjust systems and expanded human freedom. True rebellion is not random destruction but thoughtful resistance to oppression and stagnation. It requires deep understanding of what you\'re rebelling against and a vision of something better.',
        practicalApplication: 'Constructive rebellion begins with independent thinking. Question assumptions, especially those everyone takes for granted. Read diverse perspectives, not just those that confirm your beliefs. Practice intellectual courage by expressing unpopular but truthful opinions. Support causes you believe in, even when they\'re not trendy. Challenge systems that limit human potential – whether in your workplace, community, or society. Remember that rebellion can be quiet but persistent, like consistently choosing authenticity over conformity.',
        modernRelevance: 'In our age of social media echo chambers and cancel culture, intellectual rebellion becomes both more necessary and more dangerous. The pressure to conform to group think is intense, but so is the need for fresh perspectives and honest dialogue. Modern rebellion might mean questioning the latest trends, resisting addictive technologies, or choosing deep work over constant connectivity. It requires discernment to know when to conform and when to rebel.',
        reflection: 'True rebellion requires wisdom to distinguish between necessary change and destructive chaos. What systems or beliefs in your life need challenging? Where are you conforming out of fear rather than conviction? Rebellion is not about being different for its own sake but about being true to your values even when it\'s difficult. The goal is not to tear down but to build something better. Consider how your rebellion can be constructive rather than merely destructive.',
        keyPrinciples: [
        'Question everything, especially what everyone accepts as true',
        'Rebellion without a constructive vision is mere destruction',
        'True rebellion often requires more courage than conformity',
        'Independent thinking is the foundation of meaningful rebellion',
        'Rebellion should serve humanity, not just personal ego',
        'The most powerful rebellion is living authentically in a world of pretense'
        ]
    },
    {
        slug: 'stoicism',
        title: 'Stoicism',
        description: 'Timeless wisdom on handling pain, loss, and emotion with strength.',
        background: '/stoicism.jpg',
        famousQuote: 'You have power over your mind – not outside events. Realize this, and you will find strength.',
        philosopher: 'Marcus Aurelius',
        keyLesson: 'Stoicism teaches us to distinguish between what is within our control and what is not. By focusing our energy on our thoughts, actions, and responses rather than external circumstances, we can maintain inner peace and strength regardless of life\'s challenges.',
        historicalContext: 'Stoicism began in ancient Athens around 300 BCE and became the dominant philosophy of the Roman Empire. Founded by Zeno of Citium, it was developed by thinkers like Epictetus (a slave who became a teacher) and Marcus Aurelius (an emperor). Stoicism provided practical wisdom for living well regardless of external circumstances. It emphasized virtue, reason, and emotional resilience. The philosophy influenced early Christianity and continues to shape modern psychology and therapy.',
        practicalApplication: 'Stoic practice begins with the dichotomy of control – clearly distinguishing between what you can and cannot control. Focus your energy only on your actions, thoughts, and responses. Practice negative visualization – imagine losing what you value to appreciate it more and prepare for potential loss. When facing difficulties, ask "What can I learn from this?" rather than "Why is this happening to me?" Develop emotional regulation through rational thinking and acceptance of what cannot be changed.',
        modernRelevance: 'Stoicism is experiencing a renaissance in our anxiety-filled age. Its principles are validated by cognitive behavioral therapy and mindfulness research. In a world of constant change and uncertainty, Stoic wisdom provides stability and peace. It\'s particularly relevant for dealing with social media anxiety, workplace stress, and relationship challenges. The philosophy offers practical tools for mental resilience in an age of information overload and constant comparison.',
        reflection: 'Stoicism is not about suppressing emotions but about responding thoughtfully rather than reactively. Consider your recent challenges – how much energy did you spend on things outside your control? What would change if you focused only on your responses and actions? Stoicism teaches that suffering comes not from events themselves but from our judgments about events. This perspective can transform how you experience both success and failure.',
        keyPrinciples: [
        'Focus only on what you can control – your thoughts, actions, and responses',
        'Accept what you cannot change with grace and dignity',
        'Virtue is the only true good – everything else is indifferent',
        'Emotions are caused by judgments, not events',
        'Live according to nature and reason',
        'Practice memento mori – remember that life is finite and precious'
        ]
    },
    {
        slug: 'power',
        title: 'Power',
        description: 'Quotes about influence, leadership, ambition, and control.',
        background: '/power.jpg',
        famousQuote: 'Power tends to corrupt, and absolute power corrupts absolutely.',
        philosopher: 'Lord Acton',
        keyLesson: 'Power is a tool that amplifies who we truly are. It can be used to serve others or to serve ourselves. The greatest challenge of power is maintaining humility and moral clarity when we have the ability to impose our will on others.',
        historicalContext: 'The study of power has fascinated philosophers from Plato to Machiavelli to Nietzsche. Ancient Chinese philosophers like Lao Tzu warned about the corrupting nature of power, while Sun Tzu analyzed its strategic applications. Modern thinkers like Michel Foucault examined how power operates in subtle, systemic ways. History shows that power can elevate humanity to great heights or plunge it into darkness, depending on how it\'s wielded.',
        practicalApplication: 'Understanding power begins with recognizing the different types: positional power (authority), personal power (influence), and moral power (integrity). Develop your power through competence, character, and service to others. Use power to empower others rather than dominate them. Practice restraint – knowing when not to use power is as important as knowing when to use it. Build systems and relationships that can hold you accountable as your power grows.',
        modernRelevance: 'In our interconnected world, power takes new forms – digital influence, network effects, and information control. Social media gives ordinary people unprecedented power to shape narratives and influence opinions. Understanding power dynamics is crucial for navigating corporate hierarchies, political systems, and social relationships. The challenge is using power responsibly in an age where it can be amplified instantly and globally.',
        reflection: 'Power reveals character more than it creates it. Consider the power you already have – in your relationships, workplace, or community. How do you use it? Do you use power to serve yourself or others? The test of character is how you treat those who have less power than you. True power lies not in control over others but in self-mastery and the ability to inspire others to achieve their potential.',
        keyPrinciples: [
        'Power is a tool – it amplifies your existing character',
        'True power comes from service to others, not domination',
        'The greatest power is power over yourself',
        'Power without wisdom is dangerous',
        'Use power to empower others',
        'With great power comes great responsibility'
        ]
    }
    ]