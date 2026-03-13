import React, { useState } from "react";
import {
    Search,
    MessageSquare,
    User,
    ChevronRight,
    Tent,
    Coffee,
    Activity,
    Laptop,
    CheckCircle2,
    MapPin,
    Star,
    ShoppingCart,
    ArrowLeft,
    Info,
    Bell,
    Heart,
    Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Components ---

const Navbar = ({ onHomeClick }) => (
    <header
        style={{
            width: "100%",
            background: "#fff",
            borderBottom: "1px solid #eee",
            position: "sticky",
            top: 0,
            zIndex: 1000,
        }}
    >
        <nav
            style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "1rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3rem",
                    }}
                >
                    <h1
                        onClick={onHomeClick}
                        style={{
                            fontSize: "1.8rem",
                            cursor: "pointer",
                            fontWeight: 800,
                            letterSpacing: "-1.5px",
                            color: "var(--gmarket-blue)",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        G
                        <span style={{ color: "var(--gmarket-green)" }}>
                            MARKET
                        </span>
                        <span
                            style={{
                                fontSize: "0.8rem",
                                color: "#888",
                                fontWeight: 500,
                                marginLeft: "0.6rem",
                                letterSpacing: "0",
                                background: "#f0f0f0",
                                padding: "2px 8px",
                                borderRadius: "4px",
                            }}
                        >
                            LIFE MODE
                        </span>
                    </h1>
                    <div style={{ position: "relative" }}>
                        <input
                            type="text"
                            placeholder="어떤 일상의 순간을 시작하고 싶으신가요?"
                            style={{
                                padding: "0.8rem 1.5rem 0.8rem 3.5rem",
                                borderRadius: "30px",
                                border: "2px solid var(--gmarket-green)",
                                width: "520px",
                                fontSize: "1rem",
                                outline: "none",
                                background: "#fff",
                            }}
                        />
                        <Search
                            size={20}
                            style={{
                                position: "absolute",
                                left: "1.2rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "var(--gmarket-green)",
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.8rem",
                        color: "#333",
                    }}
                >
                    <div style={{ textAlign: "center", cursor: "pointer" }}>
                        <User size={24} />
                        <div style={{ fontSize: "0.7rem", marginTop: "2px" }}>
                            마이페이지
                        </div>
                    </div>
                    <div
                        style={{
                            textAlign: "center",
                            cursor: "pointer",
                            position: "relative",
                        }}
                    >
                        <ShoppingCart size={24} />
                        <div style={{ fontSize: "0.7rem", marginTop: "2px" }}>
                            장바구니
                        </div>
                        <span
                            style={{
                                position: "absolute",
                                top: -5,
                                right: -5,
                                background: "var(--gmarket-green)",
                                color: "#fff",
                                fontSize: "0.6rem",
                                padding: "1px 5px",
                                borderRadius: "10px",
                            }}
                        >
                            3
                        </span>
                    </div>
                    <div style={{ textAlign: "center", cursor: "pointer" }}>
                        <Bell size={24} />
                        <div style={{ fontSize: "0.7rem", marginTop: "2px" }}>
                            알림
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2.5rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#333",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--gmarket-blue)",
                        cursor: "pointer",
                    }}
                >
                    <Menu size={20} /> 전개 카테고리
                </div>
                <a
                    href="#"
                    style={{
                        color: "var(--gmarket-green)",
                        borderBottom: "3px solid var(--gmarket-green)",
                        paddingBottom: "2px",
                    }}
                >
                    라이프 모드
                </a>
                <a href="#">베스트</a>
                <a href="#">스마일배송</a>
                <a href="#">당일배송</a>
                <a href="#">브랜드ON</a>
                <a href="#">슈퍼딜</a>
                <a
                    href="#"
                    style={{
                        marginLeft: "auto",
                        fontWeight: 500,
                        color: "#888",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                    }}
                >
                    <img
                        src="https://image.gmarket.co.kr/ui/header/smile_cash_icon.png"
                        width="16"
                    />{" "}
                    Smile Cash <strong>12,050P</strong>
                </a>
            </div>
        </nav>
    </header>
);

const AvatarCharacter = ({ mode, config, onUpdateConfig }) => {
    const [isEditing, setIsEditing] = useState(false);

    const getAvatarImage = () => {
        switch (mode) {
            case "camping":
                return "⛺";
            case "coffee":
                return "☕";
            case "activity":
                return "🏃";
            case "laptop":
                return "💻";
            default:
                return "👤";
        }
    };

    const items = ["🧢", "🎧", "🎸", "🕶️", "🎒", "🔥"];
    const colors = ["#00b31e", "#2e3192", "#ff4d4d", "#ffcc00", "#9b51e0", "#333"];

    return (
        <div className="avatar-container">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>나의 라이프 아바타</h3>
            <div className="avatar-preview" style={{ background: config.color || "var(--gmarket-green)" }}>
                <span style={{ fontSize: "5rem" }}>{getAvatarImage()}</span>
                {config.item && (
                    <span style={{ position: "absolute", bottom: "20px", right: "20px", fontSize: "2rem" }}>
                        {config.item}
                    </span>
                )}
            </div>

            {isEditing ? (
                <div style={{ width: "100%", animation: "fadeIn 0.3s ease" }}>
                    <div style={{ marginBottom: "1rem" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>색상 선택</div>
                        <div style={{ display: "flex", gap: "0.4rem" }}>
                            {colors.map((c) => (
                                <div
                                    key={c}
                                    onClick={() => onUpdateConfig({ ...config, color: c })}
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        background: c,
                                        cursor: "pointer",
                                        border: config.color === c ? "2px solid #000" : "1px solid #ddd",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>아이템 장착</div>
                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                            {items.map((it) => (
                                <div
                                    key={it}
                                    onClick={() => onUpdateConfig({ ...config, item: config.item === it ? null : it })}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "8px",
                                        background: config.item === it ? "#e6f7e9" : "#f8f9fa",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        fontSize: "1.2rem",
                                        border: config.item === it ? "1px solid var(--gmarket-green)" : "1px solid #eee",
                                    }}
                                >
                                    {it}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => setIsEditing(false)}
                        style={{
                            width: "100%",
                            padding: "0.8rem",
                            borderRadius: "12px",
                            background: "var(--gmarket-green)",
                            color: "#fff",
                            fontWeight: 700,
                        }}
                    >
                        완료
                    </button>
                </div>
            ) : (
                <>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>
                            {mode === "home" ? "일상 모드" : `${mode.toUpperCase()} 모드`}
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#888" }}>LV.24 라이프 파인더</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                        <button
                            onClick={() => setIsEditing(true)}
                            style={{
                                flex: 1,
                                padding: "0.8rem",
                                borderRadius: "12px",
                                background: "#f0f0f0",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                            }}
                        >
                            꾸미기
                        </button>
                        <button
                            style={{
                                padding: "0.8rem",
                                borderRadius: "12px",
                                background: "var(--gmarket-blue)",
                                color: "#fff",
                            }}
                        >
                            <Star size={18} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

const ChatbotLifeMode = ({ onModeSelect }) => {
    const [messages, setMessages] = useState([
        { type: "bot", text: "안녕하세요! 지마켓 라이프 챗봇입니다. 오늘 당신의 기분이나 계획은 어떠신가요?" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleOptionClick = (mode, label) => {
        setMessages([
            ...messages,
            { type: "user", text: `${label} 모드로 설정해줘` },
            { type: "bot", text: `알겠습니다! ${label} 모드에 딱 맞는 일상을 준비해드릴게요.` },
        ]);
        setTimeout(() => onModeSelect(mode), 1000);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMsg = { type: "user", text: inputValue };
        setMessages([...messages, newMsg]);
        setInputValue("");

        // 키워드 매칭 로직 (간단하게)
        setTimeout(() => {
            let response = "흥미로운 말씀이네요! 그에 맞는 라이프 모드를 찾아드릴게요.";
            if (inputValue.includes("캠핑")) {
                response = "캠핑 모드로 변경해드릴까요? 장비부터 체크리스트까지 준비되어 있어요.";
            } else if (inputValue.includes("커피") || inputValue.includes("카페")) {
                response = "홈카페 모드가 딱이겠네요! 향긋한 원두와 머신들을 추천해드릴까요?";
            }
            setMessages((prev) => [...prev, { type: "bot", text: response }]);
        }, 800);
    };

    return (
        <div className="chatbot-container">
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" }}>
                <MessageSquare size={20} color="var(--gmarket-green)" />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800 }}>라이프 모드 설정</h3>
            </div>
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.8rem", paddingRight: "5px" }}>
                {messages.map((msg, i) => (
                    <div key={i} className={`chat-bubble ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                {[
                    { id: "camping", label: "캠핑", icon: "⛺" },
                    { id: "coffee", label: "홈카페", icon: "☕" },
                    { id: "activity", label: "러닝", icon: "🏃" },
                    { id: "laptop", label: "워크", icon: "💻" },
                ].map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => handleOptionClick(opt.id, opt.label)}
                        style={{
                            padding: "0.4rem 0.8rem",
                            borderRadius: "20px",
                            border: "1px solid #ddd",
                            background: "#fff",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                        }}
                    >
                        <span>{opt.icon}</span> {opt.label}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="직접 메시지를 입력해보세요..."
                    style={{
                        flex: 1,
                        padding: "0.7rem 1rem",
                        borderRadius: "12px",
                        border: "1px solid #eee",
                        fontSize: "0.85rem",
                        outline: "none",
                        background: "#f9f9f9",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.7rem 1.2rem",
                        borderRadius: "12px",
                        background: "var(--gmarket-green)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                    }}
                >
                    보내기
                </button>
            </form>
        </div>
    );
};

const RecentLifeModes = ({ history, onModeSelect }) => {
    if (history.length === 0) return null;

    return (
        <section style={{ marginBottom: "4rem" }}>
            <SectionHeader title="최근 나의 라이프 모드" subtitle="자주 찾는 일상을 바로 선택하세요" />
            <div className="recent-modes-slider">
                {history.map((item, i) => (
                    <div key={i} className="mode-history-item" onClick={() => onModeSelect(item.id)}>
                        <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{item.label} 모드</div>
                            <div style={{ fontSize: "0.75rem", color: "#999" }}>최근 방문</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ProductItem = ({ name, price, discount, image, badge }) => (
    <div className="product-card">
        <div
            className="product-image"
            style={{ background: `url(${image}) center/cover` }}
        >
            {badge && (
                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 1,
                    }}
                    className={`badge ${badge === "Smile" ? "badge-blue" : "badge-green"}`}
                >
                    {badge}
                </div>
            )}
            <button
                className="glass"
                style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    padding: "8px",
                    borderRadius: "50%",
                    color: "#fff",
                }}
            >
                <Heart size={16} />
            </button>
        </div>
        <div style={{ padding: "0.8rem" }}>
            <div
                style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    marginBottom: "0.3rem",
                }}
            >
                G-Life Collection
            </div>
            <div
                style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    height: "2.6rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    marginBottom: "0.6rem",
                    lineHeight: "1.3",
                }}
            >
                {name}
            </div>
            <div className="price-tag">
                {discount && (
                    <span
                        className="discount"
                        style={{ color: "#ff4d4d", marginRight: "6px" }}
                    >
                        {discount}
                    </span>
                )}
                {price.toLocaleString()}원
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.8rem",
                    color: "#999",
                    marginTop: "0.6rem",
                }}
            >
                <Star size={12} fill="#FFD700" color="#FFD700" /> 4.9{" "}
                <span style={{ color: "#eee" }}>|</span> 리뷰 852+
            </div>
        </div>
    </div>
);

const SectionHeader = ({ title, subtitle }) => (
    <div
        style={{
            marginBottom: "1.8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
        }}
    >
        <div>
            <h2
                style={{
                    fontSize: "1.8rem",
                    marginBottom: "0.4rem",
                    fontWeight: 800,
                }}
            >
                {title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                {subtitle}
            </p>
        </div>
        <a
            href="#"
            style={{
                color: "var(--gmarket-blue)",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
                fontSize: "0.9rem",
            }}
        >
            전체보기 <ChevronRight size={16} />
        </a>
    </div>
);

const ModeCategory = ({ icon: Icon, label, active, onClick }) => (
    <div
        onClick={onClick}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer",
            padding: "1.8rem",
            borderRadius: "24px",
            background: active ? "var(--gmarket-green)" : "#fff",
            color: active ? "#fff" : "#333",
            boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
            transition: "all 0.3s",
            border: active ? "none" : "1px solid #f0f0f0",
        }}
    >
        <div
            style={{
                padding: "1.2rem",
                borderRadius: "50%",
                background: active ? "rgba(255,255,255,0.2)" : "#f8f9fa",
            }}
        >
            <Icon size={36} />
        </div>
        <span style={{ fontWeight: 800, fontSize: "1.05rem" }}>{label}</span>
    </div>
);

const HomePage = ({ onModeClick, currentLifeMode, avatarConfig, onUpdateAvatarConfig, modeHistory }) => (
    <main
        style={{ maxWidth: "1400px", margin: "1rem auto", padding: "0 2rem" }}
    >
        {/* Top Mini Banner */}
        <div
            className="hero-banner"
            style={{
                background: "linear-gradient(90deg, #1A1A2E 0%, #2E3192 100%)",
            }}
        >
            <div style={{ color: "#fff", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div
                    className="badge badge-green"
                    style={{
                        padding: "4px 10px",
                    }}
                >
                    TODAY'S PICK
                </div>
                <h2
                    style={{
                        color: "#fff",
                        fontSize: "1.4rem",
                        fontWeight: 800,
                    }}
                >
                    주말, 숲으로 떠날 시간
                </h2>
                <p
                    style={{
                        fontSize: "0.95rem",
                        opacity: 0.8,
                        fontWeight: 500,
                    }}
                >
                    초보 캠퍼를 위한 AI 체크리스트부터 검증된 프리미엄 장비까지
                </p>
            </div>
            <button
                style={{
                    marginLeft: "auto",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "20px",
                    background: "var(--gmarket-green)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                }}
            >
                보러가기
            </button>
        </div>

        {/* Emphasized Section: Avatar & Chatbot */}
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "350px 1fr",
                gap: "2rem",
                marginBottom: "3rem",
            }}
        >
            <AvatarCharacter mode={currentLifeMode} config={avatarConfig} onUpdateConfig={onUpdateAvatarConfig} />
            <ChatbotLifeMode onModeSelect={onModeClick} />
        </div>

        {/* Recent Modes Slider */}
        <RecentLifeModes history={modeHistory} onModeSelect={onModeClick} />

        {/* Mode Discovery Grid */}
        <section style={{ marginBottom: "6rem" }}>
            <SectionHeader
                title="오늘의 라이프 모드 발견"
                subtitle="지금 당신에게 필요한 순간을 선택해보세요"
            />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "1.5rem",
                }}
            >
                <ModeCategory
                    icon={Tent}
                    label="캠핑/아웃도어"
                    active
                    onClick={() => onModeClick("camping")}
                />
                <ModeCategory icon={Coffee} label="홈카페/티타임" />
                <ModeCategory icon={Activity} label="웰니스/러닝" />
                <ModeCategory icon={Laptop} label="홈오피스/워크" />
                <ModeCategory icon={User} label="반려인 생활" />
                <ModeCategory icon={Star} label="취미/컬렉션" />
            </div>
        </section>

        {/* Product Recommendations Section (Scale focused) */}
        <section style={{ marginBottom: "6rem" }}>
            <SectionHeader
                title="지금 핫한 라이프 아이템"
                subtitle="지마켓 실시간 판매 데이터와 모드 추천의 만남"
            />
            <div className="product-grid">
                <ProductItem
                    name="[G-Life 런칭특가] 프리미엄 자동 팝업 텐트 4-5인용"
                    price={159000}
                    discount="25%"
                    image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400"
                    badge="Super Deal"
                />
                <ProductItem
                    name="감성 캠핑 우드 롤 테이블 XXL (전용가방 증정)"
                    price={92000}
                    discount="15%"
                    image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                    badge="Smile"
                />
                <ProductItem
                    name="브루클린 빈티지 캠핑 조명 LED 에디션"
                    price={45000}
                    discount="20%"
                    image="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=400"
                />
                <ProductItem
                    name="초경량 알루미늄 체어 1+1 기획세트"
                    price={54900}
                    discount="10%"
                    image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                    badge="Best"
                />
                <ProductItem
                    name="불멍 화로대 L사이즈 + 오로라 가루 증정"
                    price={32000}
                    image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400"
                    badge="Smile"
                />

                <ProductItem
                    name="홈카페 필수템! 반자동 커피머신 20bar"
                    price={219000}
                    discount="30%"
                    image="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=400"
                    badge="Hot"
                />
                <ProductItem
                    name="허먼밀러 스타일 인체공학 사무용 의자"
                    price={389000}
                    discount="12%"
                    image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                />
                <ProductItem
                    name="애플워치 스트랩 1+1 가죽 & 실리콘"
                    price={18500}
                    image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400"
                />
                <ProductItem
                    name="강아지 수제 간식 5종 샘플 패키지"
                    price={12900}
                    image="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=400"
                    badge="New"
                />
                <ProductItem
                    name="모던 빈티지 세라믹 머그잔 4P 세트"
                    price={24500}
                    discount="5%"
                    image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                />
            </div>
        </section>

        {/* Creator Section */}
        <section style={{ marginBottom: "6rem" }}>
            <SectionHeader
                title="크리에이터들의 리얼 모드"
                subtitle="전문가가 큐레이션한 검증된 라이프스타일 셋업"
            />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2rem",
                }}
            >
                {[
                    {
                        name: "캠퍼 강",
                        tag: "Camping Guru",
                        desc: "초보 캠퍼를 위한 필수 생존키트 10선",
                    },
                    {
                        name: "홈카페 소피",
                        tag: "Barista Expert",
                        desc: "좁은 주방도 카페처럼, 소형 머신 큐레이션",
                    },
                    {
                        name: "디자이너 민",
                        tag: "Workplace Pro",
                        desc: "몰입도를 높여주는 화이트 데스크테리어",
                    },
                ].map((c, i) => (
                    <div
                        key={i}
                        className="premium-card"
                        style={{
                            padding: "1.8rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "50%",
                                    background: "#eee",
                                }}
                            ></div>
                            <div>
                                <div
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: 800,
                                    }}
                                >
                                    {c.name}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "var(--gmarket-green)",
                                        fontWeight: 700,
                                    }}
                                >
                                    {c.tag}
                                </div>
                            </div>
                        </div>
                        <p
                            style={{
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                lineHeight: 1.4,
                            }}
                        >
                            {c.desc}
                        </p>
                        <div style={{ display: "flex", gap: "0.6rem" }}>
                            <img
                                src={`https://picsum.photos/seed/${i + 10}/100/100`}
                                style={{
                                    width: "100%",
                                    aspectRatio: 1,
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />
                            <img
                                src={`https://picsum.photos/seed/${i + 20}/100/100`}
                                style={{
                                    width: "100%",
                                    aspectRatio: 1,
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />
                            <img
                                src={`https://picsum.photos/seed/${i + 30}/100/100`}
                                style={{
                                    width: "100%",
                                    aspectRatio: 1,
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Super Deal Grid (Small Items) */}
        <section>
            <SectionHeader
                title="슈퍼딜: 라이프 모드 초특가"
                subtitle="매일 오전 10시, 새로운 모드 아이템이 공개됩니다"
            />
            <div className="product-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (i) => (
                        <ProductItem
                            key={i}
                            name={`지마켓 베스트 라이프 아이템 ${i}`}
                            price={10000 + i * 2500}
                            discount="40%"
                            image={`https://picsum.photos/seed/${i + 50}/400/400`}
                            badge="Limited"
                        />
                    ),
                )}
            </div>
        </section>
    </main>
);

const CampingModePage = ({ onBackClick }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ maxWidth: "1400px", margin: "2rem auto", padding: "0 2rem" }}
    >
        <div
            onClick={onBackClick}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                cursor: "pointer",
                color: "#888",
                marginBottom: "2.5rem",
                fontWeight: 600,
                fontSize: "0.95rem",
            }}
        >
            <ArrowLeft size={18} /> 이전 페이지로
        </div>

        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 400px",
                gap: "4rem",
            }}
        >
            <div>
                <div style={{ marginBottom: "4rem" }}>
                    <div
                        className="badge badge-green"
                        style={{
                            marginBottom: "1.5rem",
                            display: "inline-block",
                        }}
                    >
                        ENTRY MODE
                    </div>
                    <h1
                        style={{
                            fontSize: "3.2rem",
                            marginBottom: "1.2rem",
                            fontWeight: 800,
                            lineHeight: 1.1,
                        }}
                    >
                        첫 번째 캠핑을 위한 <br />
                        <span style={{ color: "var(--gmarket-green)" }}>
                            숲 속 휴식 모드
                        </span>
                    </h1>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            color: "#666",
                            fontWeight: 500,
                        }}
                    >
                        처음 떠나는 캠핑, 두려워하지 마세요. 지마켓 에디터가
                        직접 구성한 패키지로 완벽한 하룻밤을 준비하세요.
                    </p>
                </div>

                <section style={{ marginBottom: "5rem" }}>
                    <h3
                        style={{
                            fontSize: "1.6rem",
                            marginBottom: "1.8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                    >
                        <Info size={28} color="var(--gmarket-green)" /> 캠핑
                        가이드: 숲의 정적을 즐기는 법
                    </h3>
                    <div
                        className="premium-card"
                        style={{
                            background: "#f8f9fa",
                            border: "none",
                            padding: "2.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "2.5rem",
                            }}
                        >
                            <div>
                                <h4
                                    style={{
                                        marginBottom: "1rem",
                                        color: "var(--gmarket-blue)",
                                    }}
                                >
                                    CHECK 01. 사이트 구축
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#555",
                                    }}
                                >
                                    경사가 낮고 배수가 원활한 지역을 선택하세요.
                                    텐트 입구는 풍향의 반대 방향으로 향하게
                                    설치하는 것이 결로 예방에 좋습니다.
                                </p>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        marginBottom: "1rem",
                                        color: "var(--gmarket-blue)",
                                    }}
                                >
                                    CHECK 02. 매트와 침구
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#555",
                                    }}
                                >
                                    지면의 한기를 차단하는 것이 가장 중요합니다.
                                    발포 매트 위에 자충 매트를 하나 더 깔아
                                    '더블 레이어'를 만드는 것을 추천합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <SectionHeader
                        title="모드 필수 장비 리스트"
                        subtitle="이 모드를 완성하기 위해 지마켓이 제안하는 핵심 아이템"
                    />
                    <div
                        className="product-grid"
                        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
                    >
                        <ProductItem
                            name="[Full Package] 입문자용 프리미엄 캠핑 세트 (텐트+매트+침난)"
                            price={489000}
                            discount="20%"
                            image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400"
                            badge="Package"
                        />
                        <ProductItem
                            name="초고반발 10cm 자충 매트 - 싱글/더블 선택"
                            price={58000}
                            discount="10%"
                            image="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=400"
                            badge="Smile"
                        />
                        <ProductItem
                            name="스위스 밀리터리 캠핑 구스 침낭 1500g"
                            price={129000}
                            discount="15%"
                            image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                        />
                        <ProductItem
                            name="감성 불멍 전용 구리 화로대 세트"
                            price={65000}
                            image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400"
                        />
                        <ProductItem
                            name="강력 충전식 LED 서치라이트 랜턴"
                            price={32000}
                            image="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=400"
                            badge="Smile"
                        />
                        <ProductItem
                            name="캠핑용 스테인리스 코펠 12P 올인원"
                            price={78000}
                            image="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400"
                        />
                    </div>
                </section>
            </div>

            <aside>
                <div
                    className="premium-card glass"
                    style={{
                        position: "sticky",
                        top: "140px",
                        border: "2px solid var(--gmarket-green)",
                        padding: "2.5rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                background: "var(--gmarket-green)",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                            }}
                        >
                            <MessageSquare size={24} />
                        </div>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                            AI Assistant
                        </h3>
                    </div>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "#444",
                            marginBottom: "2rem",
                            fontWeight: 600,
                            lineHeight: 1.5,
                        }}
                    >
                        "
                        <span style={{ color: "var(--gmarket-green)" }}>
                            숲 속 휴식 모드
                        </span>
                        " 시나리오에 기반한 <br />
                        맞춤형 장바구니 리스트입니다.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                            marginBottom: "2.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            <CheckCircle2
                                size={20}
                                color="var(--gmarket-green)"
                            />{" "}
                            거실형 대형 텐트
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            <CheckCircle2
                                size={20}
                                color="var(--gmarket-green)"
                            />{" "}
                            바닥 자충 매트
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            <CheckCircle2
                                size={20}
                                color="var(--gmarket-green)"
                            />{" "}
                            취사용 코펠/스토브
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                opacity: 0.4,
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            <div
                                style={{
                                    width: 20,
                                    height: 20,
                                    border: "1px solid #ccc",
                                    borderRadius: "50%",
                                }}
                            ></div>{" "}
                            캠핑 체어/테이블
                        </div>
                    </div>
                    <button
                        style={{
                            width: "100%",
                            padding: "1.3rem",
                            borderRadius: "16px",
                            background: "var(--gmarket-blue)",
                            color: "#fff",
                            border: "none",
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            boxShadow: "0 10px 20px rgba(46,49,146,0.3)",
                        }}
                    >
                        장바구니 3가지 일괄 담기
                    </button>
                </div>
            </aside>
        </div>
    </motion.div>
);

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            style={{
                position: "fixed",
                bottom: "2.5rem",
                right: "2.5rem",
                zIndex: 1001,
            }}
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="premium-card"
                        style={{
                            width: "400px",
                            height: "600px",
                            display: "flex",
                            flexDirection: "column",
                            padding: "2rem",
                            borderBottomRightRadius: 0,
                            boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                        }}
                    >
                        <div
                            style={{
                                borderBottom: "1px solid #eee",
                                paddingBottom: "1.2rem",
                                marginBottom: "1.5rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.8rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        background: "var(--gmarket-blue)",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontWeight: 800,
                                    }}
                                >
                                    G
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: 800,
                                    }}
                                >
                                    Genie{" "}
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "var(--gmarket-green)",
                                            background: "#e6f7e9",
                                            padding: "2px 6px",
                                            borderRadius: "4px",
                                            marginLeft: "5px",
                                        }}
                                    >
                                        BETA
                                    </span>
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    color: "#999",
                                    fontSize: "1.5rem",
                                }}
                            >
                                ×
                            </button>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                overflowY: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "start",
                                    background: "#f8f9fa",
                                    padding: "1rem 1.2rem",
                                    borderRadius: "18px",
                                    borderBottomLeftRadius: 0,
                                    fontSize: "0.95rem",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.02)",
                                }}
                            >
                                안녕하세요! 어떤 일상의 순간을 함께
                                준비해드릴까요?
                            </div>
                            <div
                                style={{
                                    alignSelf: "end",
                                    background: "var(--gmarket-green)",
                                    color: "#fff",
                                    padding: "1rem 1.2rem",
                                    borderRadius: "18px",
                                    borderBottomRightRadius: 0,
                                    fontSize: "0.95rem",
                                    fontWeight: 500,
                                }}
                            >
                                캠핑 가서 먹을 맛있는 음식 좀 추천해줘.
                            </div>
                            <div
                                style={{
                                    alignSelf: "start",
                                    background: "#f8f9fa",
                                    padding: "1rem 1.2rem",
                                    borderRadius: "18px",
                                    borderBottomLeftRadius: 0,
                                    fontSize: "0.95rem",
                                }}
                            >
                                캠핑의 꽃은 역시 바비큐죠! <br />
                                <br />
                                지금 지마켓에서 인기 있는 **[스마일프레시]
                                항정살 구이 세트**와 **[캠핑전용] 된장찌개
                                밀키트**를 추천드려요. 이 아이템들을 장바구니에
                                담을까요?
                            </div>
                        </div>
                        <div style={{ marginTop: "1.5rem" }}>
                            <input
                                type="text"
                                placeholder="Genie에게 물어보세요..."
                                style={{
                                    width: "100%",
                                    padding: "1rem 1.2rem",
                                    borderRadius: "14px",
                                    border: "1px solid #eee",
                                    outline: "none",
                                    background: "#fdfdfd",
                                    fontSize: "0.95rem",
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "24px",
                    background: "var(--premium-gradient)",
                    color: "#fff",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 12px 24px rgba(46,49,146,0.3)",
                    transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                        "scale(1.1) rotate(5deg)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                }
            >
                <MessageSquare size={34} />
            </button>
        </div>
    );
};

export default function App() {
    const [currentMode, setCurrentMode] = useState("home"); // home or camping
    const [lifeMode, setLifeMode] = useState("home"); // home, camping, coffee, activity, laptop
    const [avatarConfig, setAvatarConfig] = useState({
        color: "var(--gmarket-green)",
        item: null, // 예: "🎸", "🎧", "🧢"
    });
    const [modeHistory, setModeHistory] = useState([]);

    const handleModeSelect = (mode) => {
        setLifeMode(mode);

        // 최근 모드 히스토리 업데이트
        const modeInfo = {
            camping: { label: "캠핑", icon: "⛺" },
            coffee: { label: "홈카페", icon: "☕" },
            activity: { label: "러닝", icon: "🏃" },
            laptop: { label: "워크", icon: "💻" },
        };

        if (modeInfo[mode]) {
            setModeHistory((prev) => {
                const filtered = prev.filter((item) => item.id !== mode);
                return [{ id: mode, ...modeInfo[mode] }, ...filtered].slice(0, 5);
            });
        }

        // 모드에 따른 기본 컬러 추천
        const colors = {
            camping: "#00b31e",
            coffee: "#6f4e37",
            activity: "#007bff",
            laptop: "#333",
            home: "var(--gmarket-green)",
        };
        setAvatarConfig((prev) => ({
            ...prev,
            color: colors[mode] || prev.color,
        }));
    };

    return (
        <div className="animate-fade-in" style={{ background: "#fff" }}>
            <Navbar onHomeClick={() => setCurrentMode("home")} />
            <AnimatePresence mode="wait">
                {currentMode === "home" ? (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <HomePage
                            onModeSelect={handleModeSelect}
                            onModeClick={handleModeSelect}
                            currentLifeMode={lifeMode}
                            avatarConfig={avatarConfig}
                            onUpdateAvatarConfig={setAvatarConfig}
                            modeHistory={modeHistory}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="camping"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <CampingModePage
                            onBackClick={() => setCurrentMode("home")}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AIAssistant />
            <footer
                style={{
                    borderTop: "1px solid #eee",
                    marginTop: "8rem",
                    padding: "5rem 2rem",
                    background: "#fafafa",
                }}
            >
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4rem",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    color: "var(--gmarket-blue)",
                                    marginBottom: "1.8rem",
                                    fontSize: "1.8rem",
                                }}
                            >
                                G
                                <span style={{ color: "var(--gmarket-green)" }}>
                                    MARKET
                                </span>
                            </h2>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    color: "#666",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                }}
                            >
                                <span>회사소개</span>
                                <span>이용약관</span>
                                <span style={{ color: "#000" }}>
                                    개인정보처리방침
                                </span>
                                <span>지적재산권보호센터</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "5rem" }}>
                            <div>
                                <h4
                                    style={{
                                        marginBottom: "1.2rem",
                                        fontSize: "1rem",
                                    }}
                                >
                                    고객센터
                                </h4>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.6rem",
                                        color: "#888",
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    <span>365일 24시간 운영</span>
                                    <strong
                                        style={{
                                            fontSize: "1.2rem",
                                            color: "#333",
                                        }}
                                    >
                                        1566-0001
                                    </strong>
                                    <span>(유료발생)</span>
                                </div>
                            </div>
                            <div>
                                <h4
                                    style={{
                                        marginBottom: "1.2rem",
                                        fontSize: "1rem",
                                    }}
                                >
                                    Family Site
                                </h4>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.6rem",
                                        color: "#888",
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    <span>옥션</span>
                                    <span>G9</span>
                                    <span>스마일페이</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            borderTop: "1px solid #eee",
                            paddingTop: "2.5rem",
                            color: "#aaa",
                            fontSize: "0.75rem",
                            lineHeight: 1.8,
                        }}
                    >
                        (주)지마켓 서울특별시 강남구 테헤란로 152 (역삼동,
                        강남파이낸스센터) 대표이사 : 전항일 사업자등록번호 :
                        220-81-83676 <br />
                        지마켓은 통신판매중개자이며 통신판매의 당사자가
                        아닙니다. 따라서 지마켓은 상품·거래정보 및 거래에 대하여
                        책임을 지지 않습니다.
                    </div>
                </div>
            </footer>
        </div>
    );
}
