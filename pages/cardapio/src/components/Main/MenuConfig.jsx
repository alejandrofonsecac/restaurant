export default function Menu() {
  const pizzasRef = useRef(null);
  const massasRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  let isDragging = false;

  const handleMouseDown = () => {
    isDragging = false;
  };

  const handleMouseMove = () => {
    isDragging = true; // detectou arrasto
  };

  const handleMouseUp = (ref) => {
    if (!isDragging) {
      scrollToSection(ref); // só desce se foi clique
    }
  }
}