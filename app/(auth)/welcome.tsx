import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="flex w-full items-end justify-end p-5"
      >
        <Text className="font-JakartaBold text-black">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#e2e8f0]" />
        }
        activeDot={
          <View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#0286ff]" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="h-[300px] w-full"
              resizeMode="contain"
            />
            <View className="mt-10 flex w-full flex-row items-center justify-center">
              <Text className="mx-10 font-JakartaBold text-3xl text-black">
                {item.title}
              </Text>
            </View>

            <Text className="mx-10 mt-3 text-center font-JakartaSemiBold text-lg text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="mt-10 w-11/12"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
